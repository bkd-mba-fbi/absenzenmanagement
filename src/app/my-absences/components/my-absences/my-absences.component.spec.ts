import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAbsencesComponent } from './my-absences.component';
import { buildTestModuleMetadata } from 'src/spec-helpers';

describe('MyAbsencesComponent', () => {
  let component: MyAbsencesComponent;
  let fixture: ComponentFixture<MyAbsencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      buildTestModuleMetadata({
        declarations: [MyAbsencesComponent],
      })
    ).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
