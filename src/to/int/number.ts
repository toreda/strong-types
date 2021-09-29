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

	let result: number | null;

	// Converting Big -> number is generally as precision may be lost.
	// Support for Big values is provided for ease of use in cases where
	// the caller would have to convert input before calling.
	if (typeMatch(value, Big)) {
		// Throws when Big value will not fit in number.
		try {
			result = value.toNumber();
		} catch (e) {
			result = null;
		}
	} else if (typeof value === 'string') {
		result = parseFloat(value);
	} else if (typeof value === 'number') {
		result = value;
	} else {
		result = null;
	}

	if (result === null || isNaN(result)) {
		return null;
	}

	if (result >= Number.POSITIVE_INFINITY || result <= Number.NEGATIVE_INFINITY) {
		return null;
	}

	if (result < Number.MIN_SAFE_INTEGER || result > Number.MAX_SAFE_INTEGER) {
		return null;
	}

	// Reject values with decimals.
	if (Math.floor(result) !== result) {
		return null;
	}

	return result;
}
