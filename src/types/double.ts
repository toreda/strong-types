import {StrongType, StrongTypeNB, makeStrong, makeStrongNB} from '../strong-type';

import {STRules} from '../rules';

export type StrongDouble = StrongType<number>;

export type StrongDoubleNB = StrongTypeNB<number>;

export function makeStrongDouble(initial: number | null | undefined, fallback: number): StrongDouble {
	const rules = new STRules<number>();
	rules.add().must.match.type.double();

	return makeStrong<number>(initial, fallback, rules);
}

export function makeStrongDoubleNB(initial: number | null | undefined, fallback: number): StrongDoubleNB {
	const rules = new STRules();
	rules.add().must.match.type.double();

	return makeStrongNB<number>(initial, fallback, rules);
}
