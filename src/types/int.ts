import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongInt = StrongType<number>;

export function makeInt(initial: number | null | undefined, fallback: number): StrongInt {
	const rules = new STRules();
	rules.add().must.match.type.integer();
	return makeStrong<number>(initial, fallback, rules);
}
