import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongUrl = StrongType<string>;

export function makeString(initial: string | null | undefined, fallback: string): StrongUrl {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.url();
	return makeStrong<string>(initial, fallback, rules);
}
