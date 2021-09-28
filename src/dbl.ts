/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2021 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

import Big from 'big.js';
import {Rules} from './rules';
import {StrongNumber} from './strong/number';
import {strongMake} from './strong';
import {toFloat} from './to/float';
import {toIntBig} from './to/int/big';

const BIG_ZERO = Big(0);

/**
 * @category Maths
 */
export type Dbl = StrongNumber<number | string | Big, Big>;

/**
 *
 * @param fallback
 * @param initial
 * @returns
 *
 * @category Maths
 */
export function dblMake(fallback: Big | string | number, initial?: Big | number | string | null): Dbl {
	const rules = new Rules<Big>();

	rules.add().must.match.type.big();

	const bigFallback = toIntBig(fallback);
	const bigInitial = toIntBig(initial);

	const strong = strongMake<Big>(bigFallback ?? BIG_ZERO, bigInitial, rules);

	return Object.assign(strong, {
		increment: (): Big | null => {
			const value = strong._data.getNull();

			if (value === null) {
				return null;
			}

			const result = value.add(Big(1));

			return strong._data.set(result) ? result : null;
		},
		decrement: (): Big | null => {
			const value = strong._data.getNull();
			if (value === null) {
				return null;
			}

			const result = value.minus(Big(1));
			return strong._data.set(result) ? result : null;
		},
		mul: (input: number | string | Big): Big | null => {
			const curr: Big = strong.get(BIG_ZERO);

			const value = toIntBig(input);
			if (value === null) {
				return null;
			}

			const result = curr.mul(value);

			return strong._data.set(result) ? result : null;
		},
		pow: (exponent: number | string | Big): Big | null => {
			const curr = strong._data.getNull();
			const value = toFloat(exponent);

			if (curr === null || value === null) {
				return null;
			}

			const result = curr.pow(value);

			return strong._data.set(result) ? result : null;
		},
		div: (input: number | string | Big): Big | null => {
			const curr = strong.get(BIG_ZERO);
			const value = toIntBig(input);

			if (curr === null || value === null) {
				return null;
			}

			if (value === BIG_ZERO || curr === BIG_ZERO) {
				return null;
			}

			const result = curr.div(value);

			return strong._data.set(result) ? result : null;
		},
		add: (input: number | string | Big): Big | null => {
			const value = toIntBig(input);
			const curr = strong.getNull();

			if (value === null) {
				return null;
			}

			if (curr === null) {
				return null;
			}

			const result = curr.add(value);

			return strong._data.set(result) ? result : null;
		},
		sub: (input: number | string | Big): Big | null => {
			const value = toIntBig(input);
			const curr = strong.getNull();

			if (value === null || curr === null) {
				return null;
			}

			const result = curr.minus(value);

			return strong._data.set(result) ? result : null;
		}
	});
}
