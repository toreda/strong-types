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
import {toDblBig} from '../../../src/to/dbl/big';

// Arbitrary math operation. a & b converted to bigs,
// then using Big math operators compared to result.
type ArbMathOp = {a: string; b: string; result: string; op: '+' | '-' | '/' | '*'};

const ARB_VALUES: ArbMathOp[] = [
	{a: '5.33', b: '5.2', result: '10.53', op: '+'},
	{a: '7.84', b: '4.28', result: '12.12', op: '+'},
	{a: '11.92', b: '207.85', result: '219.77', op: '+'},
	{a: '-99.52', b: '-6.27', result: '-105.79', op: '+'},
	{a: '36067.29', b: '3920.23', result: '39987.52', op: '+'},
	{a: '0.52', b: '0.27', result: '0.79', op: '+'},
	{a: '399867.52', b: '3920.23', result: '395947.29', op: '-'},
	{a: '8.13', b: '5.75', result: '2.38', op: '-'},
	{a: '8.93', b: '4.4', result: '4.53', op: '-'},
	{a: '6.09', b: '3.43', result: '2.66', op: '-'},
	{a: '3.33', b: '2.02', result: '1.31', op: '-'},
	{a: '8.38', b: '0.3', result: '2.514', op: '*'},
	{a: '8.93', b: '4.4', result: '39.292', op: '*'},
	{a: '8.93', b: '-4.4', result: '-39.292', op: '*'},
	{a: '-8.93', b: '4.4', result: '-39.292', op: '*'},
	{a: '-8.93', b: '-4.4', result: '39.292', op: '*'},
	{a: '71.64', b: '4.64', result: '332.4096', op: '*'},
	{a: '99.27', b: '3', result: '33.09', op: '/'},
	{a: '57.3', b: '3', result: '19.1', op: '/'},
	{a: '58.2', b: '3', result: '19.4', op: '/'}
];

describe('toDblBig', () => {
	it(`should return null when value is undefined`, () => {
		expect(toDblBig()).toBeNull();
	});

	it(`should return null when value is null`, () => {
		expect(toDblBig(null)).toBeNull();
	});

	it(`should return value without modification when value is a Big type`, () => {
		const big = Big(10814108);
		expect(toDblBig(big)).toBe(big);
	});

	it(`should return numeric string as a Big`, () => {
		const value = `119711`;
		const str = value.toString();
		const result = toDblBig(str);
		expect(result).toEqual(Big(value));
	});

	it(`should return Big for numeric input with positive decimal values`, () => {
		const value = 4441221.331;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return null for numeric input with negative decimal values`, () => {
		const value = -2421.44444;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return value for numeric input with decimal values .000`, () => {
		const value = 91741.0;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return value for numeric input with decimal values .000`, () => {
		const value = 44411414.0;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return value for string input with decimal values .000`, () => {
		const value = '228114.00';
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return Big for numeric input 0`, () => {
		const value = 0;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(0));
	});

	it(`should return Big for negative number -1`, () => {
		const value = -1;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return value for Big input with decimal values .000`, () => {
		const value = Big(18194.0 as any);
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return null for positive infinity`, () => {
		const value = Number.POSITIVE_INFINITY;
		const result = toDblBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for positive infinity + arbitrary value`, () => {
		const value = Number.POSITIVE_INFINITY + 12078;
		const result = toDblBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for negative infinity - arbitrary value`, () => {
		const value = Number.NEGATIVE_INFINITY - 66811;
		const result = toDblBig(value);
		expect(result).toBeNull();
	});

	it(`should return 0 for Big input 0`, () => {
		const value = Big(0);
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(0));
	});

	it(`should return 0 for string '0'`, () => {
		const value = '0';
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(0));
	});

	it(`should return null for string which produces NaN`, () => {
		const value = 'aaa';
		const result = toDblBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for number exceeding max safe int`, () => {
		const value = Number.MAX_SAFE_INTEGER + 101;
		const result = toDblBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for number exceeding max safe int`, () => {
		const value = Number.MAX_SAFE_INTEGER + 101;
		const result = toDblBig(value);
		expect(result).toBeNull();
	});

	it(`should return null for number exceeding min safe int`, () => {
		const value = Number.MIN_SAFE_INTEGER - 10911;
		const result = toDblBig(value);
		expect(result).toBeNull();
	});

	it(`should return Big value for min safe int`, () => {
		const value = Number.MIN_SAFE_INTEGER;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(Number.MIN_SAFE_INTEGER));
	});

	it(`should return Big value for max safe int`, () => {
		const value = Number.MAX_SAFE_INTEGER;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(Number.MAX_SAFE_INTEGER));
	});

	it(`should return Big value for min safe int`, () => {
		const value = Number.MIN_SAFE_INTEGER;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(Number.MIN_SAFE_INTEGER));
	});

	it(`should return Big value for string with numeric value matching max safe int`, () => {
		const value = `${Number.MAX_SAFE_INTEGER}`;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(Number.MAX_SAFE_INTEGER));
	});

	it(`should return Big value for string with numeric value matching min safe int`, () => {
		const value = `${Number.MIN_SAFE_INTEGER}`;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(Number.MIN_SAFE_INTEGER));
	});

	it(`should return Big value for string with numeric value exceeding max safe int`, () => {
		const value = `${Number.MAX_SAFE_INTEGER + 1000}`;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return Big value for string with numeric value below min safe int`, () => {
		const value = `${Number.MIN_SAFE_INTEGER - 1000}`;
		const result = toDblBig(value);
		expect(result).toStrictEqual(Big(value));
	});

	it(`should return null for truthy value of type other than string, number, and Big`, () => {
		expect(toDblBig([] as any)).toBeNull();
		expect(toDblBig({} as any)).toBeNull();
		expect(toDblBig(Symbol('aaaaa') as any)).toBeNull();
	});

	for (const arbValue of ARB_VALUES) {
		it(`should perform precise math '${arbValue.a}' ${arbValue.op} '${arbValue.b}' === '${arbValue.result}`, () => {
			const a = Big(arbValue.a);
			const b = Big(arbValue.b);

			switch (arbValue.op) {
				case '+':
					expect(a.plus(b)).toStrictEqual(Big(arbValue.result));
					break;
				case '-':
					expect(a.sub(b)).toStrictEqual(Big(arbValue.result));
					break;
				case '/':
					expect(a.div(b)).toStrictEqual(Big(arbValue.result));
					break;
				case '*':
					expect(a.mul(b)).toStrictEqual(Big(arbValue.result));
					break;
			}
		});
	}
});
