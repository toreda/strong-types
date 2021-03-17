import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';
import {StrongNumber} from '../strong-number';

export type StrongUInt = StrongNumber;

export function makeUInt(initial: number | null | undefined, fallback: number): StrongUInt {
	const rules = new STRules<number>();

	rules.add().must.match.type.integer();
	rules.add().must.be.greaterThanOrEqualTo(0);

	const strong = makeStrong<number>(initial, fallback, rules);

	return Object.assign(strong, {
		increment: () => {
			if (strong !== null) {
				strong._data.add(1);
			}
		},
		decrement: () => {
			if (strong !== null) {
				strong._data.add(-1);
			}
		}
	});
}
