import {Strong, makeStrong} from '../strong';

import {Rules} from '../rules';

/** Strong Unsigned Integer type.
 *
 * @category Types - Numbers
 */
export type UInt = Strong<number>;
/** UInt alias added for temporary backwards compat.
 *
 * @category Types - Numbers
 */

export type StrongUInt = UInt;

/**
 * Create new strong unsigned integer.
 * @param fallback
 * @param initial
 * @returns
 */
export function makeUInt(fallback: number, initial?: number | null): UInt {
	const rules = new Rules<number>();

	rules.add().must.match.type.integer();
	rules.add().must.be.greaterThanOrEqualTo(0);

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
