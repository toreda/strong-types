import {Strong, makeStrong} from '../strong';

import {Rules} from '../rules';

export type StrongArray<T> = Strong<T[]>;

export function makeArray<T>(fallback: T[], initial?: T[] | null): StrongArray<T> {
	const rules = new Rules();
	rules.add().must.match.type.array();
	return makeStrong<T[]>(fallback, initial, rules);
}
