import {STRules} from '../rules';
import {StrongType, makeStrong} from '../strong-type';

export type StrongInt = StrongType<number>;

export function makeInt(fallback: number, initial?: number | null): StrongInt {
	const rules = new STRules();
	rules.add().must.match.type.integer();
	return makeStrong<number>(fallback, initial, rules);
}
