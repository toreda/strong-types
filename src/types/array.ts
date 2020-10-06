import {StrongType, StrongTypeNB, makeStrong, makeStrongNB} from '../strong-type';

import {STRules} from '../rules';

export type StrongArray<T> = StrongType<T[]>;
export type StrongArrayNB<T> = StrongTypeNB<T[]>;

export function makeStrongArray<T>(initial: T[] | null | undefined, fallback: T[]): StrongArray<T> {
	const rules = new STRules();
	rules.add().must.match.type.array();
	return makeStrong<T[]>(initial, fallback, rules);
}

export function makeStrongArrayNB<T>(initial: T[] | null | undefined, fallback: T[]): StrongArrayNB<T> {
	const rules = new STRules();
	rules.add().must.match.type.array();
	return makeStrongNB<T[]>(initial, fallback, rules);
}
