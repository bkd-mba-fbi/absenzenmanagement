import { TestBed } from '@angular/core/testing';

import { ReportsService } from './reports.service';
import { buildTestModuleMetadata } from 'src/spec-helpers';
import { StorageService } from './storage.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('ReportsService', () => {
  let service: ReportsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule(
      buildTestModuleMetadata({
        providers: [
          {
            provide: StorageService,
            useValue: {
              getAccessToken(): Option<string> {
                return 'SOMETOKEN';
              },
              getPayload(): Option<object> {
                return { id_person: 42 };
              },
            },
          },
        ],
      })
    );
    service = TestBed.inject(ReportsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  describe('Stammblatt', () => {
    describe('personMasterDataAvailability$', () => {
      let callback: jasmine.Spy;
      beforeEach(() => {
        callback = jasmine.createSpy('callback');
        service.personMasterDataAvailability$.subscribe(callback);
      });

      it('emits true if the report is available', () => {
        httpTestingController
          .expectOne(
            (req) =>
              req.urlWithParams ===
              'https://eventotest.api/CrystalReports/AvailableReports/Person?ids=290026&keys=42'
          )
          .flush({ Id: 290026 });

        expect(callback.calls.allArgs()).toEqual([[false], [true]]);
      });

      it('emits false if the report is unavailable', () => {
        httpTestingController
          .expectOne(
            (req) =>
              req.urlWithParams ===
              'https://eventotest.api/CrystalReports/AvailableReports/Person?ids=290026&keys=42'
          )
          .flush(null);

        expect(callback.calls.allArgs()).toEqual([[false]]);
      });
    });

    describe('getPersonMasterDataUrl', () => {
      it('returns the report url', () => {
        expect(service.getPersonMasterDataUrl(123)).toBe(
          'https://eventotest.api/Files/CrystalReports/Person/290026?ids=123&token=SOMETOKEN'
        );
      });
    });
  });

  describe('Lektionsbuchungen', () => {
    describe('studentConfirmationAvailability$', () => {
      let callback: jasmine.Spy;
      beforeEach(() => {
        callback = jasmine.createSpy('callback');
        service.setStudentConfirmationAvailabilityRecordId('123_456');
        service.studentConfirmationAvailability$.subscribe(callback);
      });

      it('emits true if the report is available', () => {
        httpTestingController
          .expectOne(
            (req) =>
              req.urlWithParams ===
              'https://eventotest.api/CrystalReports/AvailableReports/Praesenzinformation?ids=30&keys=123_456'
          )
          .flush({ Id: 30 });

        expect(callback.calls.allArgs()).toEqual([[false], [true]]);
      });

      it('emits false if the report is unavailable', () => {
        httpTestingController
          .expectOne(
            (req) =>
              req.urlWithParams ===
              'https://eventotest.api/CrystalReports/AvailableReports/Praesenzinformation?ids=30&keys=123_456'
          )
          .flush(null);

        expect(callback.calls.allArgs()).toEqual([[false]]);
      });
    });

    describe('getStudentConfirmationUrl', () => {
      it('returns the report url', () => {
        expect(service.getStudentConfirmationUrl(['123_456', '789_012'])).toBe(
          'https://eventotest.api/Files/CrystalReports/Praesenzinformation/30?ids=123_456,789_012&token=SOMETOKEN'
        );
      });
    });
  });
});
