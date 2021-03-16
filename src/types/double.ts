import {StrongType, makeStrong} from '../strong-type';

import {STData} from '../data';
import {STRules} from '../rules';
import {StrongNumber} from '../strong-number';

export type StrongDouble = StrongNumber;

export function makeDouble(initial: number | null | undefined, fallback: number): StrongDouble {
	const rules = new STRules<number>();
	rules.add().must.match.type.double();

	const strong = makeStrong<number>(initial, fallback, rules);

	const instance = new STData(initial, fallback, rules);

	return Object.assign(strong, {
		increment: () => {
			if (instance !== null) {
				return instance.add(1);
			}
			if (instance === null) {
				return fallback;
			}
		},
		decrement: () => {
			if (instance !== null) {
				return instance.add(-1);
			}
			if (instance === null) {
				return fallback;
			}
		}
	});
}
