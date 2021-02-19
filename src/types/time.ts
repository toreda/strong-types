import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongTime = StrongType<string>;

export function makeTime(initial: string | null | undefined, fallback: string): StrongTime {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.time();
	return makeStrong<string>(initial, fallback, rules);
}
