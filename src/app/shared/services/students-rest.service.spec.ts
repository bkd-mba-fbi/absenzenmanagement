import { TestBed } from '@angular/core/testing';

import { buildTestModuleMetadata } from 'src/spec-helpers';
import { StudentsRestService } from './students-rest.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('StudentsRestService', () => {
  let service: StudentsRestService;
  let httpTestingController: HttpTestingController;
  let date: Date;

  beforeEach(() => {
    TestBed.configureTestingModule(buildTestModuleMetadata());
    service = TestBed.get(StudentsRestService);
    httpTestingController = TestBed.get(HttpTestingController);

    date = new Date();
  });

  afterEach(() => httpTestingController.verify());

  describe('.getLegalRepresentatives', () => {
    it('requests the legal representatives of a given student', () => {
      service.getLegalRepresentatives(39361).subscribe(result => {
        expect(result).toEqual([buildModel(54425), buildModel(56200)]);
      });

      httpTestingController
        .expectOne('https://eventotest.api/Students/39361/LegalRepresentatives')
        .flush([buildModel(54425, false), buildModel(56200, false)]);
    });

    function buildModel(id: number, useDate = true): any {
      const ref = {
        Id: 123,
        Href: ''
      };
      const dateValue = useDate ? date : date.toISOString();
      return {
        Id: id,
        RepresentativeRef: ref,
        StudentRef: ref,
        DateFrom: dateValue,
        DateTo: dateValue,
        RepresentativeAfterMajority: 0,
        Href: ''
      };
    }
  });
});
