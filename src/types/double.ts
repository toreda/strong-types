import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongDouble = StrongType<number>;

export function makeDouble(initial: number | null | undefined, fallback: number): StrongDouble {
	const rules = new STRules<number>();
	rules.add().must.match.type.double();

	return makeStrong<number>(initial, fallback, rules);
}
