import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongArray<T> = StrongType<T[]>;

export function makeArray<T>(fallback: T[], initial: T[] | null | undefined): StrongArray<T> {
	const rules = new STRules();
	rules.add().must.match.type.array();
	return makeStrong<T[]>(fallback, initial, rules);
}
