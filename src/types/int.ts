import {STRules} from '../rules';
import {StrongNumber} from '../strong-number';
import {makeStrong} from '../strong-type';

export type StrongInt = StrongNumber;

export function makeInt(fallback: number, initial?: number | null): StrongInt {
	const rules = new STRules();
	rules.add().must.match.type.integer();

	const strong = makeStrong<number>(fallback, initial, rules);

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
