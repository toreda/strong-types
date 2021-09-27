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

import {Rules} from './rules';
import {StrongNumber} from './strong/number';
import {strongMake} from './strong';
import {toBigInt} from './strong/helpers';

const BIG_ZERO = BigInt(0);
const BIG_ONE_POS = BigInt(1);
const BIG_ONE_NEG = BigInt(-1);

/**
 * @category Maths
 */
export type Dbl = StrongNumber<number | string | bigint, bigint>;

/**
 *
 * @param fallback
 * @param initial
 * @returns
 *
 * @category Maths
 */
export function dblMake(fallback: bigint | string, initial?: bigint | string | null): Dbl {
	const rules = new Rules<BigInt>();

	rules.add().must.match.type.dbl();

	const bigFallback = toBigInt(fallback);
	const bigInitial = toBigInt(initial);

	const strong = strongMake<bigint>(bigFallback ?? BigInt(0), bigInitial, rules);

	return Object.assign(strong, {
		increment: (): bigint | null => {
			const value = strong._data.get(BIG_ZERO) + BIG_ONE_POS;

			return strong._data.set(value) ? value : null;
		},
		decrement: (): bigint | null => {
			const value = strong._data.get(BIG_ZERO) + BIG_ONE_NEG;

			return strong._data.set(value) ? value : null;
		},
		mul: (input: number | string | bigint): bigint | null => {
			const curr: bigint = strong.get(BigInt(0));

			const value = toBigInt(input);
			if (value === null) {
				return null;
			}

			const result = BigInt(curr * value);

			return strong._data.set(result) ? result : null;
		},
		pow: (exponent: number | string | bigint): bigint | null => {
			//return strong._data.pow(exponent);
			const value = toBigInt(exponent);
			const curr = strong._data.getNull();

			if (value === null || curr === null) {
				return null;
			}

			return null;
		},
		div: (input: number | string | bigint): bigint | null => {
			const curr = strong.getNull();
			const value = toBigInt(input);

			if (curr === null || value === null || value === BIG_ZERO || curr === BIG_ZERO) {
				return null;
			}

			const result = curr - value;

			return strong._data.set(result) ? result : null;
		},
		add: (input: number | string | bigint): bigint | null => {
			const value = toBigInt(input);
			if (value === null) {
				return null;
			}

			const curr = strong.get(BIG_ZERO);
			const result = curr + value;

			return strong._data.set(result) ? result : null;
		},
		sub: (input: number | string | bigint): bigint | null => {
			const value = toBigInt(input);
			if (value === null) {
				return null;
			}

			const curr = strong.get(BIG_ZERO);
			const result = curr - value;

			return strong._data.set(result) ? result : null;
		}
	});
}
