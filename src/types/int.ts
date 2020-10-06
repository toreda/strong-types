import {StrongType, StrongTypeNB, makeStrong, makeStrongNB} from '../strong-type';

import {STRules} from '../rules';

export type StrongInt = StrongType<number>;
export type StrongIntNB = StrongTypeNB<number>;

export function makeStrongInt(initial: number | null | undefined, fallback: number): StrongInt {
	const rules = new STRules();
	rules.add().must.match.type.integer();
	return makeStrong<number>(initial, fallback, rules);
}

export function makeStrongIntNB(initial: number | null | undefined, fallback: number): StrongIntNB | null {
	const rules = new STRules();
	rules.add().must.match.type.integer();
	return makeStrongNB<number>(initial, fallback, rules);
}
