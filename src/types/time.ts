import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongTime = StrongType<string>;

export function makeTime(fallback: string, initial?: string | null): StrongTime {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.time();
	return makeStrong<string>(fallback, initial, rules);
}
