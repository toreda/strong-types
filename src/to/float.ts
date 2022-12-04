import Big from 'big.js';
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
import {typeMatch} from '../type/match';

/**
 * Convert a Big, string, or number to standard float (`number`). Returns `null` when
 * input value is `undefined`, `null`, or a `Big` value which cannot be safely converted
 * to `number`. Useful for working with `Big` values but small types, such as a small exponent,
 * which must be in number form to use with a `Big`.
 * @param value
 * @returns
 *
 * @category Strong Helpers
 */
export function toFloat(value?: number | string | Big | null): number | null {
	if (value === undefined || value === null) {
		return null;
	}

	if (typeMatch(value, Big)) {
		if (value.gt(Number.MAX_SAFE_INTEGER) || value.lt(Number.MIN_SAFE_INTEGER)) {
			return null;
		} else {
			return value.toNumber();
		}
	}

	if (typeof value === 'string') {
		const result = parseFloat(value);
		if (!isNaN(result) && isFinite(result)) {
			return result;
		} else {
			return null;
		}
	}

	return value;
}
