import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongInt = StrongType<number, number>;
export type StrongIntNull = StrongType<number, null>;

export function makeInt(initial: number | null | undefined, fallback: number): StrongInt {
	const rules = new STRules();
	rules.add().must.match.type.integer();
	return makeStrong<number>(initial, fallback, rules);
}

export function makeIntNull(initial: number | null | undefined, fallback: number): StrongIntNull {
	const rules = new STRules();
	rules.add().must.match.type.integer();
	return makeStrong<number, null>(initial, fallback, rules);
}
