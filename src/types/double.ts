import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';
import {StrongNumber} from '../strong-number';

export type StrongDouble = StrongNumber;

export function makeDouble(fallback: number, initial: number | null | undefined): StrongDouble {
	const rules = new STRules<number>();
	
	rules.add().must.match.type.double();

<<<<<<< HEAD
	return makeStrong<number>(fallback, initial, rules);
=======
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
>>>>>>> feature/increment-decrement
}
