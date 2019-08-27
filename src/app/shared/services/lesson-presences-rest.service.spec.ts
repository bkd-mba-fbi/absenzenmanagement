import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';

import { buildTestModuleMetadata } from 'src/spec-helpers';
import { LessonPresencesRestService } from './lesson-presences-rest.service';
import { EvaluateAbsencesFilter } from 'src/app/evaluate-absences/services/evaluate-absences-state.service';
import { EditAbsencesFilter } from 'src/app/edit-absences/services/edit-absences-state.service';

describe('LessonPresencesRestService', () => {
  let service: LessonPresencesRestService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule(buildTestModuleMetadata({}));
    service = TestBed.get(LessonPresencesRestService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  describe('.get', () => {
    const ref = {
      Id: 123,
      HRef: ''
    };
    const data: Readonly<any> = {
      Id: '1',
      LessonRef: ref,
      StudentRef: ref,
      EventRef: ref,
      TypeRef: { Id: null, HRef: null },
      StudyClassRef: ref,
      EventTypeId: 123,
      ConfirmationState: null,
      ConfirmationStateId: null,
      EventDesignation: '',
      EventNumber: '',
      HasStudyCourseConfirmationCode: false,
      IsReadOnly: false,
      LessonDateTimeFrom: '2019-04-25T07:45:00',
      LessonDateTimeTo: '2019-04-25T08:30:00',
      Comment: null,
      Date: '2019-04-18',
      Type: null,
      StudentFullName: '',
      StudyClassDesignation: '',
      StudyClassNumber: '',
      TeacherInformation: ''
    };

    it('decodes ISO date strings to date objects', () => {
      service.get(123).subscribe(result => {
        expect(result.LessonDateTimeFrom).toEqual(
          new Date('2019-04-25T07:45:00')
        );
        expect(result.LessonDateTimeTo).toEqual(
          new Date('2019-04-25T08:30:00')
        );
        expect(result.Date).toEqual(new Date('2019-04-18T00:00:00'));
      });

      httpTestingController
        .expectOne('https://eventotest.api/LessonPresences/123')
        .flush(data);
    });
  });

  describe('.getListByDate', () => {
    it('fetches list filtered by given date', () => {
      const data: any[] = [];
      service
        .getListByDate(new Date(2000, 0, 23))
        .subscribe(result => expect(result).toBe(data));

      const url =
        'https://eventotest.api/LessonPresences/?filter.LessonDateTimeFrom==2000-01-23';
      httpTestingController
        .expectOne(req => req.urlWithParams === url, url)
        .flush(data);
    });
  });

  describe('.getListForToday', () => {
    it("fetches list filtered by today's date", () => {
      const data: any[] = [];
      service.getListForToday().subscribe(result => expect(result).toBe(data));

      const url = 'https://eventotest.api/LessonPresences/Today';
      httpTestingController
        .expectOne(req => req.urlWithParams === url, url)
        .flush(data);
    });
  });

  describe('.getListOfUnconfirmed', () => {
    it('fetches list filtered by unconfirmed state from settings', () => {
      const data: any[] = [];
      service
        .getListOfUnconfirmed()
        .subscribe(result => expect(result).toBe(data));

      const url =
        'https://eventotest.api/LessonPresences/?filter.TypeRef==11&filter.ConfirmationStateId==219&filter.HasStudyCourseConfirmationCode==false';
      httpTestingController
        .expectOne(req => req.urlWithParams === url, url)
        .flush(data);
    });
  });

  describe('.getStatistics', () => {
    const data: any[] = [];
    let filter: EvaluateAbsencesFilter;

    beforeEach(() => {
      filter = {
        student: null,
        moduleInstance: null,
        studyClass: null
      };
    });

    it('fetches statistics based with the given filter, all filter criteria set', () => {
      filter.student = { Key: 123, Value: 'Hans Muster' };
      filter.moduleInstance = { Key: 333, Value: 'Biologie' };
      filter.studyClass = { Key: 678, Value: 'D3b' };
      const url =
        'https://eventotest.api/LessonPresences/Statistics?filter.StudentRef==123&filter.EventRef==333&filter.StudyClassRef==678';

      service
        .getStatistics(filter)
        .subscribe(result => expect(result).toBe(data));

      httpTestingController
        .expectOne(req => req.urlWithParams === url, url)
        .flush(data);
    });

    it('fetches statistics based with the given filter, only student set', () => {
      filter.student = { Key: 123, Value: 'Hans Muster' };
      const url =
        'https://eventotest.api/LessonPresences/Statistics?filter.StudentRef==123';

      service
        .getStatistics(filter)
        .subscribe(result => expect(result).toBe(data));

      httpTestingController
        .expectOne(req => req.urlWithParams === url, url)
        .flush(data);
    });
  });

  describe('.getFilteredList', () => {
    const data: any[] = [];
    let filter: EditAbsencesFilter;

    beforeEach(() => {
      filter = {
        student: null,
        moduleInstance: null,
        studyClass: null,
        dateFrom: null,
        dateTo: null,
        presenceType: null,
        confirmationState: null
      };
    });

    it('fetches lesson presences with the given basic filters', () => {
      filter.student = { Key: 123, Value: 'Hans Muster' };
      filter.moduleInstance = { Key: 333, Value: 'Biologie' };
      filter.studyClass = { Key: 678, Value: 'D3b' };

      const url =
        'https://eventotest.api/LessonPresences/?filter.StudentRef==123&filter.EventRef==333&filter.StudyClassRef==678';

      service
        .getFilteredList(filter)
        .subscribe(result => expect(result).toBe(data));

      httpTestingController
        .expectOne(req => req.urlWithParams === url, url)
        .flush(data);
    });

    it('fetches lesson presences with all given filters', () => {
      filter.student = { Key: 123, Value: 'Hans Muster' };
      filter.moduleInstance = { Key: 333, Value: 'Biologie' };
      filter.studyClass = { Key: 678, Value: 'D3b' };
      filter.dateFrom = new Date(2000, 0, 23);
      filter.dateTo = new Date(2000, 0, 25);
      filter.presenceType = { Key: 888, Value: 'Halbtag' };
      filter.confirmationState = { Key: 999, Value: 'Bestätigt' };

      const url =
        'https://eventotest.api/LessonPresences/?filter.StudentRef==123&filter.EventRef==333&filter.StudyClassRef==678&filter.TypeRef==888&filter.ConfirmationStateId==999&filter.LessonDateTimeFrom=%3E2000-01-22&filter.LessonDateTimeTo=%3C2000-01-26';

      service
        .getFilteredList(filter)
        .subscribe(result => expect(result).toBe(data));

      httpTestingController
        .expectOne(req => req.urlWithParams === url, url)
        .flush(data);
    });

    it('fetches lesson presences with with only date from', () => {
      filter.dateFrom = new Date(2000, 0, 23);

      const url =
        'https://eventotest.api/LessonPresences/?filter.LessonDateTimeFrom=%3E2000-01-22';

      service
        .getFilteredList(filter)
        .subscribe(result => expect(result).toBe(data));

      httpTestingController
        .expectOne(req => req.urlWithParams === url, url)
        .flush(data);
    });

    it('fetches lesson presences with with only date to', () => {
      filter.dateTo = new Date(2000, 0, 25);

      const url =
        'https://eventotest.api/LessonPresences/?filter.LessonDateTimeTo=%3C2000-01-26';

      service
        .getFilteredList(filter)
        .subscribe(result => expect(result).toBe(data));

      httpTestingController
        .expectOne(req => req.urlWithParams === url, url)
        .flush(data);
    });

    it('fetches lesson presences with with equal date from/to', () => {
      filter.dateFrom = new Date(2000, 0, 23);
      filter.dateTo = new Date(2000, 0, 23);

      const url =
        'https://eventotest.api/LessonPresences/?filter.LessonDateTimeFrom==2000-01-23';

      service
        .getFilteredList(filter)
        .subscribe(result => expect(result).toBe(data));

      httpTestingController
        .expectOne(req => req.urlWithParams === url, url)
        .flush(data);
    });
  });
});
