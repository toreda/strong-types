import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongUInt = StrongType<number>;

export function makeUInt(fallback: number, initial: number | null | undefined): StrongUInt {
	const rules = new STRules<number>();

	rules.add().must.match.type.integer();
	rules.add().must.be.greaterThanOrEqualTo(0);

	return makeStrong<number>(fallback, initial, rules);
}
