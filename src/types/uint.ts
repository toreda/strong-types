import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongUInt = StrongType<number, number>;
export type StrongUIntNull = StrongType<number, null>;

export function makeUInt(initial: number | null | undefined, fallback: number): StrongUInt {
	const rules = new STRules<number>();

	rules.add().must.match.type.integer();
	rules.add().must.be.greaterThanOrEqualTo(0);

	return makeStrong<number>(initial, fallback, rules);
}

export function makeUIntNull(initial: number | null | undefined, fallback: number): StrongUIntNull {
	const rules = new STRules<number>();

	rules.add().must.match.type.integer();
	rules.add().must.be.greaterThanOrEqualTo(0);

	return makeStrong<number, null>(initial, fallback, rules);
}
