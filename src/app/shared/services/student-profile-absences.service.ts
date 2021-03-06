import { Injectable, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Observable, ReplaySubject, EMPTY, of, combineLatest } from 'rxjs';
import { map, switchMap, startWith, multicast, refCount } from 'rxjs/operators';

import { SETTINGS, Settings } from 'src/app/settings';
import { LessonPresence } from '../models/lesson-presence.model';
import { LessonPresencesRestService } from './lesson-presences-rest.service';
import { PresenceTypesService } from './presence-types.service';
import { LessonPresenceStatistic } from '../models/lesson-presence-statistic';

export interface StudentProfileAbsencesCounts {
  openAbsences: Option<number>;
  excusedAbsences: Option<number>;
  unexcusedAbsences: Option<number>;
  incidents: Option<number>;
  halfDays: Option<number>;
}

@Injectable()
export class StudentProfileAbsencesService {
  private studentId$ = new ReplaySubject<number>(1);

  openAbsences$ = this.getAbsences(this.loadOpenAbsences.bind(this));
  excusedAbsences$ = this.getAbsences(this.loadExcusedAbsences.bind(this));
  unexcusedAbsences$ = this.getAbsences(this.loadUnexcusedAbsences.bind(this));
  incidents$ = this.getAbsences(this.loadIncidents.bind(this));
  halfDays$ = this.getAbsences(this.loadHalfDays.bind(this));

  counts$ = this.getCounts();

  constructor(
    @Inject(SETTINGS) private settings: Settings,
    private lessonPresencesService: LessonPresencesRestService,
    private presenceTypesService: PresenceTypesService,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {}

  setStudentId(id: number): void {
    this.studentId$.next(id);
  }

  private getAbsences(
    loadFn: (
      studentId: number
    ) => Observable<Option<ReadonlyArray<LessonPresence>>>
  ): Observable<Option<ReadonlyArray<LessonPresence>>> {
    return this.studentId$.pipe(
      switchMap(loadFn),
      startWith(null),
      // Clear the cache if all subscribers disconnect (don't replay the previous value)
      multicast(
        () => new ReplaySubject<Option<ReadonlyArray<LessonPresence>>>(1)
      ),
      refCount()
    );
  }

  private getCounts(): Observable<StudentProfileAbsencesCounts> {
    return this.studentId$.pipe(
      switchMap((studentId) => {
        return combineLatest([
          this.loadStatistics(studentId).pipe(startWith(null)),
          this.openAbsences$.pipe(map((absences) => absences?.length ?? null)),
        ]);
      }),
      map(([statistics, openAbsencesCount]) => ({
        openAbsences: openAbsencesCount,
        excusedAbsences: statistics?.TotalAbsencesValidExcuse ?? null,
        unexcusedAbsences: statistics?.TotalAbsencesWithoutExcuse ?? null,
        incidents: statistics?.TotalIncidents ?? null,
        halfDays: statistics?.TotalHalfDays ?? null,
      }))
    );
  }

  private loadStatistics(
    studentId: number
  ): Observable<LessonPresenceStatistic> {
    return this.lessonPresencesService
      .getStatistics(
        { student: studentId, educationalEvent: null, studyClass: null },
        null,
        0
      )
      .pipe(
        switchMap(({ entries }) => {
          if (entries.length > 0) {
            return of(entries[0]);
          }
          this.toastr.error(
            this.translate.instant(`global.rest-errors.notfound-message`),
            this.translate.instant(`global.rest-errors.notfound-title`)
          );
          return EMPTY;
        })
      );
  }

  private loadOpenAbsences(
    studentId: number
  ): Observable<ReadonlyArray<LessonPresence>> {
    return this.lessonPresencesService.getListOfUnconfirmed(
      this.getBaseParams(studentId)
    );
  }

  private loadExcusedAbsences(
    studentId: number
  ): Observable<ReadonlyArray<LessonPresence>> {
    return this.lessonPresencesService.getList({
      params: {
        ...this.getBaseParams(studentId),
        'filter.ConfirmationStateId': `=${this.settings.excusedAbsenceStateId}`,
      },
    });
  }

  private loadUnexcusedAbsences(
    studentId: number
  ): Observable<ReadonlyArray<LessonPresence>> {
    return this.lessonPresencesService.getList({
      params: {
        ...this.getBaseParams(studentId),
        'filter.ConfirmationStateId': `=${this.settings.unexcusedAbsenceStateId}`,
      },
    });
  }

  private loadIncidents(
    studentId: number
  ): Observable<ReadonlyArray<LessonPresence>> {
    return this.presenceTypesService.incidentTypes$.pipe(
      map((incidents) => ({
        ...this.getBaseParams(studentId),
        'filter.TypeRef': `;${incidents.map((i) => i.Id).join(';')}`,
      })),
      switchMap((params) => this.lessonPresencesService.getList({ params }))
    );
  }

  private loadHalfDays(
    studentId: number
  ): Observable<ReadonlyArray<LessonPresence>> {
    return this.lessonPresencesService.getList({
      params: {
        ...this.getBaseParams(studentId),
        'filter.TypeRef': `=${this.settings.halfDayPresenceTypeId}`,
      },
    });
  }

  private getBaseParams(studentId: number): Dict<string> {
    return {
      sort: 'LessonDateTimeFrom.asc',
      'filter.StudentRef': `=${studentId}`,
    };
  }
}
