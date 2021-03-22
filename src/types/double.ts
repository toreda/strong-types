import {STRules} from '../rules';
import {StrongType, makeStrong} from '../strong-type';

export type StrongDouble = StrongType<number>;

export function makeDouble(fallback: number, initial?: number | null): StrongDouble {
	const rules = new STRules<number>();
	rules.add().must.match.type.double();

	return makeStrong<number>(fallback, initial, rules);
}
