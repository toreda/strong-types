import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongDate = StrongType<Date>;

export function makeString(initial: Date | null | undefined, fallback: Date): StrongDate {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.date();
	return makeStrong<Date>(initial, fallback, rules);
}
