import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongString = StrongType<string>;

export function makeString(initial: string | null | undefined, fallback: string): StrongString {
	const rules = new STRules();
	rules.add().must.match.type.string();
	return makeStrong<string>(initial, fallback, rules);
}
