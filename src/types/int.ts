import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongInt = StrongType<number>;

export function makeInt(fallback: number, initial: number | null | undefined): StrongInt {
	const rules = new STRules();
	rules.add().must.match.type.integer();
	return makeStrong<number>(fallback, initial, rules);
}
