import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongDateTime = StrongType<string>;

export function makeDateTime(initial: string | null | undefined, fallback: string): StrongDateTime {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.date();
	rules.add().must.be.time();
	return makeStrong<string>(initial, fallback, rules);
}
