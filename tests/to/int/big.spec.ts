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
import {toIntBig} from '../../../src/to/int/big';

describe('toIntBig', () => {
	it(`should return null when value is undefined`, () => {
		expect(toIntBig()).toBeNull();
	});

	it(`should return null when value is null`, () => {
		expect(toIntBig(null)).toBeNull();
	});

	it(`should return value without modification when value is a Big type`, () => {
		const big = Big(10814108);
		expect(toIntBig(big)).toBe(big);
	});

	it(`should return numeric string as a Big`, () => {
		const value = `119711`;
		const str = value.toString();
		const result = toIntBig(str);
		expect(result).toEqual(Big(value));
	});

	it(`should return null for numeric input with positive decimal values`, () => {
		const value = 11084.331;
		const result = toIntBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for numeric input with negative decimal values`, () => {
		const value = -4481.23232323;
		const result = toIntBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for numeric input with decimal values .000`, () => {
		const value = 91741.0;
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(91741));
	});

	it(`should return value for numeric input with decimal values .000`, () => {
		const value = 24242.0;
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return value for string input with decimal values .000`, () => {
		const value = '228114.00';
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return Big for numeric input 0`, () => {
		const value = 0;
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(0));
	});

	it(`should return Big for negative number -1`, () => {
		const value = -1;
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return value for Big input with decimal values .000`, () => {
		const value = Big(18194.0 as any);
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return null for positive infinity`, () => {
		const value = Number.POSITIVE_INFINITY;
		const result = toIntBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for positive infinity + arbitrary value`, () => {
		const value = Number.POSITIVE_INFINITY + 12078;
		const result = toIntBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for negative infinity - arbitrary value`, () => {
		const value = Number.NEGATIVE_INFINITY - 66811;
		const result = toIntBig(value);
		expect(result).toBeNull();
	});

	it(`should return 0 for Big input 0`, () => {
		const value = Big(0);
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(0));
	});

	it(`should return 0 for string '0'`, () => {
		const value = '0';
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(0));
	});

	it(`should return null for string which produces NaN`, () => {
		const value = 'aaa141';
		const result = toIntBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for string which produces NaN`, () => {
		const value = 'aaa';
		const result = toIntBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for number exceeding max safe int`, () => {
		const value = Number.MAX_SAFE_INTEGER + 101;
		const result = toIntBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for number exceeding max safe int`, () => {
		const value = Number.MAX_SAFE_INTEGER + 101;
		const result = toIntBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for number exceeding min safe int`, () => {
		const value = Number.MIN_SAFE_INTEGER - 10911;
		const result = toIntBig(value);
		expect(result).toBeNull();
	});

	it(`should return Big value for min safe int`, () => {
		const value = Number.MIN_SAFE_INTEGER;
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(Number.MIN_SAFE_INTEGER));
	});

	it(`should return Big value for max safe int`, () => {
		const value = Number.MAX_SAFE_INTEGER;
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(Number.MAX_SAFE_INTEGER));
	});

	it(`should return Big value for min safe int`, () => {
		const value = Number.MIN_SAFE_INTEGER;
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(Number.MIN_SAFE_INTEGER));
	});

	it(`should return Big value for string with numeric value matching max safe int`, () => {
		const value = `${Number.MAX_SAFE_INTEGER}`;
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(Number.MAX_SAFE_INTEGER));
	});

	it(`should return Big value for string with numeric value matching min safe int`, () => {
		const value = `${Number.MIN_SAFE_INTEGER}`;
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(Number.MIN_SAFE_INTEGER));
	});

	it(`should return Big value for string with numeric value exceeding max safe int`, () => {
		const value = `${Number.MAX_SAFE_INTEGER + 1000}`;
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return Big value for string with numeric value below min safe int`, () => {
		const value = `${Number.MIN_SAFE_INTEGER - 1000}`;
		const result = toIntBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return null for truthy value of type other than string, number, and Big`, () => {
		expect(toIntBig([] as any)).toBeNull();
		expect(toIntBig({} as any)).toBeNull();
		expect(toIntBig(Symbol('aaaaa') as any)).toBeNull();
	});

});