import { OnInit, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import {
  finalize,
  map,
  filter,
  startWith,
  switchMap,
  take,
  pluck,
} from 'rxjs/operators';

import { LessonPresencesUpdateRestService } from 'src/app/shared/services/lesson-presences-update-rest.service';
import { PresenceTypesService } from 'src/app/shared/services/presence-types.service';
import { getValidationErrors } from 'src/app/shared/utils/form';
import { Settings } from 'src/app/settings';
import { StorageService } from 'src/app/shared/services/storage.service';
import { PresenceType } from 'src/app/shared/models/presence-type.model';
import { isEmptyArray } from 'src/app/shared/utils/array';

@Component({
  template: '',
})
export abstract class MyAbsencesAbstractConfirmComponent
  implements OnInit, OnDestroy {
  formGroup = this.createFormGroup();

  saving$ = new BehaviorSubject(false);
  protected submitted$ = new BehaviorSubject(false);

  abstract absenceTypes$: Observable<ReadonlyArray<PresenceType>>;

  absenceTypeIdErrors$ = combineLatest([
    getValidationErrors(this.formGroup.get('absenceTypeId')),
    this.submitted$,
  ]).pipe(
    filter((v) => v[1]),
    map((v) => v[0]),
    startWith([])
  );

  abstract selectedLessonIds$: Observable<ReadonlyArray<number>>;
  protected abstract confirmationStateId: Option<number> = null;

  protected destroy$ = new Subject();

  constructor(
    protected fb: FormBuilder,
    protected router: Router,
    protected toastr: ToastrService,
    protected translate: TranslateService,
    protected presenceTypesService: PresenceTypesService,
    protected updateService: LessonPresencesUpdateRestService,
    protected storageService: StorageService,
    protected settings: Settings
  ) {}

  ngOnInit(): void {
    // Nothing to confirm if no entries are selected
    this.selectedLessonIds$
      .pipe(take(1), filter(isEmptyArray))
      .subscribe(() => this.navigateBack());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  onSubmit(): void {
    this.submitted$.next(true);
    if (this.formGroup.valid) {
      const { absenceTypeId } = this.formGroup.value;
      this.save(absenceTypeId);
    }
  }

  cancel(): void {
    this.navigateBack();
  }

  getSelectedCount(): Observable<number> {
    return this.selectedLessonIds$.pipe(pluck('length'));
  }

  protected createFormGroup(): FormGroup {
    return this.fb.group({
      absenceTypeId: [null, Validators.required],
    });
  }

  protected save(absenceTypeId: number): void {
    this.saving$.next(true);

    this.selectedLessonIds$
      .pipe(
        take(1),
        switchMap((selectedLessonIds) =>
          this.updateService.editLessonPresences(
            selectedLessonIds,
            [Number(this.storageService.getPayload()?.id_person)],
            absenceTypeId,
            this.confirmationStateId
          )
        ),
        finalize(() => this.saving$.next(false))
      )
      .subscribe(this.onSaveSuccess.bind(this));
  }

  protected onSaveSuccess(): void {
    this.toastr.success(
      this.translate.instant('my-absences.confirm.save-success')
    );
    this.navigateBack();
  }

  protected abstract navigateBack(): void;
}