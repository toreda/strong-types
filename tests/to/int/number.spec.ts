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
import {toIntNumber} from '../../../src/to/int/number';

describe('toIntNumber', () => {
	it(`should return null when value is undefined`, () => {
		expect(toIntNumber()).toBeNull();
	});

	it(`should return null when value is null`, () => {
		expect(toIntNumber(null)).toBeNull();
	});

	it(`should return value without modification when value is a number`, () => {
		const value = 10814108;

		expect(toIntNumber(value)).toBe(value);
	});

	it(`should return numeric string as number`, () => {
		const value = 8149814;
		const str = value.toString();
		const result = toIntNumber(str);

		expect(result).toBe(value);
	});

	it(`should return null for numeric input with positive decimal values`, () => {
		const value = 410811.331;
		const result = toIntNumber(value);

		expect(result).toBeNull();
	});

	it(`should return null for numeric input with negative decimal values`, () => {
		const value = -44411.33211;
		const result = toIntNumber(value);

		expect(result).toBeNull();
	});

	it(`should return value for numeric input with decimal values .000`, () => {
		const value = 87181.0;
		const result = toIntNumber(value);

		expect(result).toBe(value);
	});

	it(`should return value for numeric input with decimal values .000`, () => {
		const value = 33111.0;
		const result = toIntNumber(value);

		expect(result).toBe(value);
	});

	it(`should return value for string input with decimal values .000`, () => {
		const value = '228114.00';
		const result = toIntNumber(value);

		expect(result).toBe(parseFloat(value));
	});

	it(`should return 0 for numeric input 0`, () => {
		const value = 0;
		const result = toIntNumber(value);

		expect(result).toBe(0);
	});

	it(`should return negative number -1`, () => {
		const value = -1;
		const result = toIntNumber(value);

		expect(result).toBe(value);
	});

	it(`should return value int for decimal values .000`, () => {
		const value = 18194.0;
		const result = toIntNumber(value);

		expect(result).toBe(value);
	});

	it(`should return null when input is a strict Big containing an int too big for number`, () => {
		const big = Big(Number.MAX_SAFE_INTEGER);
		const value = big.plus(Big(Number.MAX_SAFE_INTEGER));

		expect(toIntNumber(value)).toBeNull();
	});

	it(`should return null when input is a Big containing an int too big for number`, () => {
		const big = Big(Number.MAX_SAFE_INTEGER);
		const value = big.plus(99999999);

		expect(toIntNumber(value)).toBeNull();
	});

	it(`should return null when input is a Big containing an int too small for number`, () => {
		const big = Big(Number.MIN_SAFE_INTEGER);
		const value = big.minus(99999999);

		expect(toIntNumber(value)).toBeNull();
	});

	it(`should return null for positive infinity`, () => {
		const value = Number.POSITIVE_INFINITY;
		const result = toIntNumber(value);
		expect(result).toBeNull();
	});

	it(`should return null for positive infinity + arbitrary value`, () => {
		const value = Number.POSITIVE_INFINITY + 12078;
		const result = toIntNumber(value);
		expect(result).toBeNull();
	});

	it(`should return null for negative infinity - arbitrary value`, () => {
		const value = Number.NEGATIVE_INFINITY - 66811;
		const result = toIntNumber(value);
		expect(result).toBeNull();
	});

	it(`should return 0 for string '0'`, () => {
		const value = '0';
		const result = toIntNumber(value);
		expect(result).toBe(0);
	});

	it(`should return null for string which produces NaN`, () => {
		const value = 'aaa141';
		const result = toIntNumber(value);
		expect(result).toBeNull();
	});

	it(`should return null for string which produces NaN`, () => {
		const value = 'aaa';
		const result = toIntNumber(value);
		expect(result).toBeNull();
	});

	it(`should return null for number exceeding max safe int`, () => {
		const value = Number.MAX_SAFE_INTEGER + 101;
		const result = toIntNumber(value);
		expect(result).toBeNull();
	});

	it(`should return null for number exceeding max safe int`, () => {
		const value = Number.MAX_SAFE_INTEGER + 101;
		const result = toIntNumber(value);
		expect(result).toBeNull();
	});

	it(`should return null for number exceeding min safe int`, () => {
		const value = Number.MIN_SAFE_INTEGER - 10911;
		const result = toIntNumber(value);
		expect(result).toBeNull();
	});

	it(`should return int for min safe int`, () => {
		const value = Number.MIN_SAFE_INTEGER;
		const result = toIntNumber(value);
		expect(result).toBe(Number.MIN_SAFE_INTEGER);
	});

	it(`should return string value for max safe int`, () => {
		const value = `${Number.MAX_SAFE_INTEGER}`;
		const result = toIntNumber(value);
		expect(result).toBe(Number.MAX_SAFE_INTEGER);
	});

	it(`should return value for min safe int`, () => {
		const value = `${Number.MIN_SAFE_INTEGER}`;
		const result = toIntNumber(value);
		expect(result).toBe(Number.MIN_SAFE_INTEGER);
	});

	it(`should return value for string with numeric value matching max safe int`, () => {
		const value = `${Number.MAX_SAFE_INTEGER}`;
		const result = toIntNumber(value);
		expect(result).toBe(Number.MAX_SAFE_INTEGER);
	});

	it(`should return null for numeric string exceeding max safe int`, () => {
		const value = `${Number.MAX_SAFE_INTEGER + 1000}`;
		const result = toIntNumber(value);
		expect(result).toBeNull();
	});

	it(`should return null null for numeric string exceeding min safe int`, () => {
		const value = `${Number.MIN_SAFE_INTEGER - 1000}`;
		const result = toIntNumber(value);
		expect(result).toBeNull();
	});

	it(`should return null for truthy value of type other than string or number`, () => {
		expect(toIntNumber(['a'] as any)).toBeNull();
		expect(toIntNumber({} as any)).toBeNull();
		expect(toIntNumber(Symbol('aaaaa') as any)).toBeNull();
	});
});
