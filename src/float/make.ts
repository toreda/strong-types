/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2022 Toreda, Inc.
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

import {Float} from '../float';
import {Rules} from '../rules';
import {createType} from '../create/type';
import {initialValue} from '../initial/value';

/**
 *
 * @param fallback
 * @param initial
 * @returns
 *
 * @category Maths
 */
export function floatMake(fallback: number, value?: number | null): Float {
	const rules = new Rules<number>();

	rules.add().must.match.type.float();

	const strong = createType<number>(fallback, initialValue(value), rules, 'Float');

	return Object.assign(strong, {
		increment: (): number | null => {
			return strong._data.add(1);
		},
		decrement: (): number | null => {
			const curr = strong._data.getNull();
			if (curr === null || curr === 0) {
				return null;
			}

			return strong._data.add(-1);
		},
		mul: (amt: number): number | null => {
			return strong._data.mul(amt);
		},
		pow: (exponent: number) => {
			return strong._data.pow(exponent);
		},
		div: (amt: number): number | null => {
			return strong._data.div(amt);
		},
		add: (amt: number): number | null => {
			return strong._data.add(amt);
		},
		sub: (amt: number) => {
			return strong._data.add(amt * -1);
		}
	});
}
