import { TestBed } from '@angular/core/testing';

import { EditAbsencesStateService } from './edit-absences-state.service';
import { buildTestModuleMetadata } from 'src/spec-helpers';

describe('EditAbsencesStateService', () => {
  beforeEach(() => TestBed.configureTestingModule(buildTestModuleMetadata({})));

  it('should be created', () => {
    const service: EditAbsencesStateService = TestBed.get(
      EditAbsencesStateService
    );
    expect(service).toBeTruthy();
  });
});