import {STRules} from '../rules';
import {StrongType, makeStrong} from '../strong-type';

export type StrongHexColorCode = StrongType<string>;

export function makeHexColorCode(fallback: string, initial?: string | null): StrongHexColorCode {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.hexColorCode();
	return makeStrong<string>(fallback, initial, rules);
}
