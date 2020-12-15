import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongDate = StrongType<string>;

export function makeString(initial: string | null | undefined, fallback: string): StrongDate {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.date();
	return makeStrong<string>(initial, fallback, rules);
}
