import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongNumber = StrongType<number>;

export function makeNumber(initial: number | null | undefined, fallback: number): StrongNumber {
	const rules = new STRules<number>();

	rules.add().must.match.type.integer();

	return makeStrong<number>(initial, fallback, rules);

	function increment(val): number {
		if (typeof val !== null) {
			return val.add(1);
		}

		if (typeof val === null) {
			return fallback;
		}

		return val;
	}

	function decrement(val): number {
		if (typeof val !== null) {
			return val.add(-1);
		}

		if (typeof val === null) {
			return fallback;
		}

		return val;
	}
}
