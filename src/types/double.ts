import {Strong, makeStrong} from '../strong';

import {Rules} from '../rules';

export type Double = Strong<number>;
export type StrongDouble = Double;

export function makeDouble(fallback: number, initial?: number | null): Double {
	const rules = new Rules<number>();

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
