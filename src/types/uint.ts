import {StrongType, StrongTypeNB, makeStrong, makeStrongNB} from '../strong-type';

import {STRules} from '../rules';

export type StrongUInt = StrongType<number>;

export type StrongUIntNB = StrongTypeNB<number>;

export function makeStrongUInt(initial: number | null | undefined, fallback: number): StrongUInt {
	const rules = new STRules<number>();

	rules.add().must.match.type.integer();
	rules.add().must.be.greaterThanOrEqualTo(0);

	return makeStrong<number>(initial, fallback, rules);
}

export function makeStrongUIntNB(initial: number | null | undefined, fallback: number): StrongUIntNB {
	const rules = new STRules();
	return makeStrongNB<number>(initial, fallback, rules);
}
