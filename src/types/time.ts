import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongTime = StrongType<string>;

export function makeString(initial: string | null | undefined, fallback: string): StrongTime {
	const rules = new STRules();
	rules.add().must.match.type.integer();
	return makeStrong<string>(initial, fallback, rules);
}
