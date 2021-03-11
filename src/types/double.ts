import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongDouble = StrongType<number>;

export function makeDouble(fallback: number, initial: number | null | undefined): StrongDouble {
	const rules = new STRules<number>();
	rules.add().must.match.type.double();

	return makeStrong<number>(fallback, initial, rules);
}
