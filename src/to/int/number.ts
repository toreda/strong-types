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
import {typeMatch} from '../../type/match';

/**
 * Convert from common numeric types to JavaScript `number` type.
 * @param value
 * @returns
 *
 * @category Strong Helpers
 */
export function toIntNumber(value?: number | string | Big | null): number | null {
	if (value === undefined || value === null) {
		return null;
	}

	// Possible precision loss, not an idea conversion.
	if (typeMatch(value, Big)) {
		if (value.gt(Number.MAX_SAFE_INTEGER) || value.lt(Number.MAX_SAFE_INTEGER)) {
			return null;
		} else {
			return value.toNumber();
		}
	}

	if (typeof value === 'string') {
		const result = parseInt(value);
		return !isNaN(result) ? result : null;
	}

	if (value >= Number.POSITIVE_INFINITY || value <= Number.NEGATIVE_INFINITY) {
		return null;
	}

	return value;
}
