import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { buildTestModuleMetadata } from 'src/spec-helpers';
import { DateSelectComponent } from './date-select.component';

describe('DateSelectComponent', () => {
  let component: DateSelectComponent;
  let fixture: ComponentFixture<DateSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      buildTestModuleMetadata({})
    ).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
