import {STRules} from '../rules';
import {StrongType, makeStrong} from '../strong-type';

export type StrongDateTime = StrongType<string>;

export function makeDateTime(fallback: string, initial?: string | null): StrongDateTime {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.dateTime();
	return makeStrong<string>(fallback, initial, rules);
}
