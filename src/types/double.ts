import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongDouble = StrongType<number, number>;

export type StrongDoubleNull = StrongType<number, null>;

export function makeDouble(initial: number | null | undefined, fallback: number): StrongDouble {
	const rules = new STRules<number>();
	rules.add().must.match.type.double();

	return makeStrong<number, number>(initial, fallback, rules);
}

export function makeDoubleNull(initial: number | null | undefined, fallback: number): StrongDoubleNull {
	const rules = new STRules();
	rules.add().must.match.type.double();

	return makeStrong<number, null>(initial, fallback, rules);
}
