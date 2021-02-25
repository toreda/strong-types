import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongHexColorCode = StrongType<string>;

export function makeHexColorCode(fallback: string, initial: string | null | undefined): StrongHexColorCode {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.hexColorCode();
	return makeStrong<string>(fallback, initial, rules);
}
