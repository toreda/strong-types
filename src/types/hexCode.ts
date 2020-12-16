import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongHexCode = StrongType<string>;

export function makeHexCode(initial: string | null | undefined, fallback: string): StrongHexCode {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.hexColorCode();
	return makeStrong<string>(initial, fallback, rules);
}
