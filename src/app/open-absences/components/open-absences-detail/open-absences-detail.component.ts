import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, combineLatest, Subject } from 'rxjs';
import { switchMap, map, take, takeUntil, filter } from 'rxjs/operators';

import { OpenAbsencesService } from '../../services/open-absences.service';
import { ConfirmAbsencesSelectionService } from 'src/app/shared/services/confirm-absences-selection.service';
import { LessonPresence } from 'src/app/shared/models/lesson-presence.model';
import { ScrollPositionService } from 'src/app/shared/services/scroll-position.service';
import { longerOrEqual, isTruthy } from 'src/app/shared/utils/filter';
import { not } from 'fp-ts/lib/function';
import { PresenceTypesService } from '../../../shared/services/presence-types.service';

@Component({
  selector: 'erz-open-absences-detail',
  templateUrl: './open-absences-detail.component.html',
  styleUrls: ['./open-absences-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenAbsencesDetailComponent
  implements OnInit, AfterViewInit, OnDestroy {
  absences$ = this.route.paramMap.pipe(
    switchMap(this.getAbsencesForParams.bind(this))
  );
  hasAbsences$ = this.absences$.pipe(map(longerOrEqual(1)));
  studentFullName$ = this.absences$.pipe(
    map((absences) => (absences[0] && absences[0].StudentFullName) || null)
  );
  allSelected$ = combineLatest([
    this.absences$,
    this.selectionService.selection$,
  ]).pipe(map(([absences, selection]) => absences.length === selection.length));

  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private openAbsencesService: OpenAbsencesService,
    private presenceTypesService: PresenceTypesService,
    public selectionService: ConfirmAbsencesSelectionService,
    private scrollPosition: ScrollPositionService
  ) {}

  ngOnInit(): void {
    this.selectionService.clearNonLessonPresences();

    // Set detail params on service to be able to navigate back to
    // here after edit
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(
      (params) =>
        (this.openAbsencesService.currentDetail = {
          date: String(params.get('date')),
          personId: Number(params.get('personId')),
        })
    );

    // If there are no entries, return to main list
    this.hasAbsences$
      .pipe(takeUntil(this.destroy$), filter(not(isTruthy)))
      .subscribe(() => this.router.navigate(['/open-absences']));
  }

  ngAfterViewInit(): void {
    this.scrollPosition.restore();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  toggleAll(checked: boolean): void {
    if (checked) {
      this.absences$
        .pipe(take(1))
        .subscribe((absences) => this.selectionService.clear(absences));
    } else {
      this.selectionService.clear();
    }
  }

  onRowClick(event: Event, checkbox: HTMLInputElement): void {
    if (event.target !== checkbox) {
      checkbox.click();
    }
  }

  getPresenceTypeDesignation(
    lessonPresence: LessonPresence
  ): Observable<Option<string>> {
    return this.presenceTypesService.displayedTypes$.pipe(
      map(
        (types) =>
          (lessonPresence.TypeRef.Id &&
            types.find((t) => t.Id === lessonPresence.TypeRef.Id)
              ?.Designation) ||
          null
      )
    );
  }

  private getAbsencesForParams(
    params: ParamMap
  ): Observable<ReadonlyArray<LessonPresence>> {
    return this.openAbsencesService.getUnconfirmedAbsences(
      String(params.get('date')),
      Number(params.get('personId'))
    );
  }
}
