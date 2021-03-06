import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { MyAbsencesReportListComponent } from './my-absences-report-list.component';
import { buildTestModuleMetadata } from 'src/spec-helpers';
import { MyAbsencesReportStateService } from '../../services/my-absences-report-state.service';
import { MyAbsencesReportSelectionService } from '../../services/my-absences-report-selection.service';
import { MyAbsencesReportHeaderComponent } from '../my-absences-report-header/my-absences-report-header.component';

describe('MyAbsencesReportListComponent', () => {
  let component: MyAbsencesReportListComponent;
  let fixture: ComponentFixture<MyAbsencesReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      buildTestModuleMetadata({
        declarations: [
          MyAbsencesReportListComponent,
          MyAbsencesReportHeaderComponent,
        ],
        providers: [
          {
            provide: MyAbsencesReportStateService,
            useValue: {
              loading$: of(false),
              loadingPage$: of(false),
              entries$: of([]),
              presenceTypes$: of([]),
              selected: [],
              setFilter: jasmine.createSpy('setFilter'),
              isFilterValid$: of(true),
              validFilter$: of({}),
            },
          },
          MyAbsencesReportSelectionService,
        ],
      })
    ).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAbsencesReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
