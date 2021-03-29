import {STRules} from '../rules';
import {StrongType, makeStrong} from '../strong-type';

export type StrongString = StrongType<string>;

export function makeString(fallback: string, initial?: string | null): StrongString {
	const rules = new STRules();
	rules.add().must.match.type.string();
	return makeStrong<string>(fallback, initial, rules);
}
