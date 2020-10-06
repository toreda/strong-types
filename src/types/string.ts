import {StrongType, StrongTypeNB, makeStrong, makeStrongNB} from '../strong-type';

import {STRules} from '../rules';

export type StrongString = StrongType<string>;

export type StrongStringNB = StrongTypeNB<string>;

export function makeStrongString(initial: string | null | undefined, fallback: string): StrongString {
	const rules = new STRules();
	rules.add().must.match.type.string();
	return makeStrong<string>(initial, fallback, rules);
}

export function makeStrongStringNB(initial: string | null | undefined, fallback: string): StrongStringNB {
	const rules = new STRules();
	rules.add().must.match.type.string();
	return makeStrongNB<string>(initial, fallback, rules);
}
