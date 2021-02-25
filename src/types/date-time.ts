import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongDateTime = StrongType<string>;

export function makeDateTime(fallback: string, initial: string | null | undefined): StrongDateTime {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.dateTime();
	return makeStrong<string>(fallback, initial, rules);
}
