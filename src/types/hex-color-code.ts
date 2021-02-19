import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongHexColorCode = StrongType<string>;

export function makeHexColorCode(initial: string | null | undefined, fallback: string): StrongHexColorCode {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.hexColorCode();
	return makeStrong<string>(initial, fallback, rules);
}
