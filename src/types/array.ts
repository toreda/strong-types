import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongArray<T> = StrongType<T[]>;

export function makeArray<T>(initial: T[] | null | undefined, fallback: T[]): StrongArray<T> {
	const rules = new STRules();
	rules.add().must.match.type.array();
	return makeStrong<T[]>(initial, fallback, rules);
}
