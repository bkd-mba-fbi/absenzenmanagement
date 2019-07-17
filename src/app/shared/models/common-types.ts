import * as t from 'io-ts';

export function Option<T extends t.Any>(
  optionalType: T
): t.UnionC<[t.NullC, T]> {
  return t.union([t.null, optionalType]);
}

export function Maybe<T extends t.Any>(
  maybeType: T
): t.UnionC<[t.NullC, t.UndefinedC, T]> {
  return t.union([t.null, t.undefined, maybeType]);
}

const Reference = t.type({ Id: t.number, HRef: t.string });
type Reference = t.TypeOf<typeof Reference>;
export { Reference };
