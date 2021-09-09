import {STRules} from '../rules';
import {StrongNumber} from '../strong-number';
import {makeStrong} from '../strong-type';

export type StrongDouble = StrongNumber;

export function makeDouble(fallback: number, initial?: number | null): StrongDouble {
	const rules = new STRules<number>();

	rules.add().must.match.type.double();

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
