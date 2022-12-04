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

import Big from 'big.js';
import {BigArg} from '../../big/arg';
import {bigMake} from '../../big/make';
import {typeMatch} from '../../type/match';

/**
 * Convert from common numeric types to the `Big` data type.
 * @param value
 * @returns
 *
 * @category Strong Helpers
 */
export function toIntBig(value?: BigArg | null): Big | null {
	try {
		if (value === undefined || value === null) {
			return null;
		}

		if (typeMatch(value, Big)) {
			return value;
		}

		if (typeof value === 'string') {
			const result = bigMake(value);
			if (result === null) {
				return null;
			}

			// String values converted to Big can be larger than JavaScript `number`,
			// meaning common JavaScript math functions cannot be used to check result.
			// Values with decimal values are rejected.
			const rounded = result.round(4);
			return !isNaN(rounded.cmp(result)) ? rounded : null;
		}

		// All other supported types have been processed. If value is not
		// a number, we don't support it. Bail out.
		if (typeof value !== 'number') {
			return null;
		}

		if (isNaN(value) || value >= Number.POSITIVE_INFINITY || value <= Number.NEGATIVE_INFINITY) {
			return null;
		}

		if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER) {
			return null;
		}

		if (Math.floor(value) !== value) {
			return null;
		}
	} catch (e) {}

	return bigMake(value);
}
