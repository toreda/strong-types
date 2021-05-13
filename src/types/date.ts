import {STRules} from '../rules';
import {StrongType, makeStrong} from '../strong-type';

export type StrongDate = StrongType<string>;

export function makeDate(fallback: string, initial?: string | null): StrongDate {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.date();
	return makeStrong<string>(fallback, initial, rules);
}
