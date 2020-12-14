import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongDateTime = StrongType<Date>;

export function makeString(initial: Date | null | undefined, fallback: Date): StrongDateTime {
	const rules = new STRules();
	rules.add().must.match.type.string();
	return makeStrong<Date>(initial, fallback, rules);
}
