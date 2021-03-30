import {STRules} from '../rules';
import {StrongType, makeStrong} from '../strong-type';

export type StrongTime = StrongType<string>;

export function makeTime(fallback: string, initial?: string | null): StrongTime {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.time();
	return makeStrong<string>(fallback, initial, rules);
}
