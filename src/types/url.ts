import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongUrl = StrongType<string>;

export function makeUrl(fallback: string, initial?: string | null): StrongUrl {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.url();
	return makeStrong<string>(fallback, initial, rules);
}
