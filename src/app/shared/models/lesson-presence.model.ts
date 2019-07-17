import * as t from 'io-ts';
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString';
import { Reference, Option, Maybe } from './common-types';

const LessonPresence = t.type({
  LessonRef: Reference,
  StudentRef: Reference,
  EventRef: Reference,
  PresenceTypeRef: Option(Reference),
  StudyClassRef: Reference,
  EventTypeId: t.number,
  PresenceConfirmationState: Option(t.string),
  PresenceConfirmationStateId: Option(t.number),
  EventDesignation: t.string,
  EventNumber: t.string,
  HasStudyCourseConfirmationCode: t.boolean,
  IsReadOnly: t.boolean,
  LessonDateTimeFrom: DateFromISOString,
  LessonDateTimeTo: DateFromISOString,
  PresenceComment: Option(t.string),
  PresenceDate: Option(DateFromISOString),
  PresenceType: Option(t.string),
  StudentFullName: t.string,
  StudyClassDesignation: t.string,
  StudyClassNumber: t.string,
  TeacherInformation: t.string,
  WasAbsentInPrecedingLesson: Maybe(t.boolean),
  HRef: t.string
});
type LessonPresence = t.TypeOf<typeof LessonPresence>;
export { LessonPresence };

export type LessonPresenceProps = t.PropsOf<typeof LessonPresence>;
