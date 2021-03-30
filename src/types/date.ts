import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongDate = StrongType<string>;

export function makeDate(fallback: string, initial: string | null | undefined): StrongDate {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.date();
	return makeStrong<string>(fallback, initial, rules);
}
