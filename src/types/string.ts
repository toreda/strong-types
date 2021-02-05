import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongString = StrongType<string>;

export function makeString(fallback: string, initial: string | null | undefined): StrongString {
	const rules = new STRules();
	rules.add().must.match.type.string();
	return makeStrong<string>(fallback, initial, rules);
}
