import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongArray<T> = StrongType<T[], T[]>;
export type StrongArrayNull<T> = StrongType<T[], null>;

export function makeArray<T>(initial: T[] | null | undefined, fallback: T[]): StrongArray<T> {
	const rules = new STRules();
	rules.add().must.match.type.array();
	return makeStrong<T[]>(initial, fallback, rules);
}

export function makeArrayNB<T>(initial: T[] | null | undefined, fallback: T[]): StrongArrayNull<T> {
	const rules = new STRules();
	rules.add().must.match.type.array();
	return makeStrong<T[], null>(initial, fallback, rules);
}
