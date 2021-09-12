import {Strong, makeStrong} from './strong';

import {Rules} from './rules';

export type Int = Strong<number>;
export type StrongInt = Int;

export function makeInt(fallback: number, initial?: number | null): Int {
	const rules = new Rules();
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
