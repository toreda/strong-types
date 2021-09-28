/**
 *	MIT License
 *
 *	Copyright (c) 2010 - 2021 Toreda, Inc.
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

import {Dbl, dblMake} from '../src/dbl';
import {Float, floatMake} from '../src/float';
import {Int, intMake} from '../src/int';
import {UInt, uIntMake} from '../src/uint';

import Big from 'big.js';

const BIG_ZERO = Big(0);

interface TestMathOp<T> {
	base: T;
	opValue: T;
	result: T;
}

interface TestType<T> {
	name: string;
	instance: any;
	zero: T;
	inc: {
		base: T;
		result: T;
	};
	dec: {
		base: T;
		result: T;
	};
	add: TestMathOp<T>;
}

let double: Dbl;
let int: Int;
let uint: UInt;
let float: Float;
let testTypes: TestType<unknown>[];

describe('numberMethods', () => {
	double = dblMake(BIG_ZERO, BIG_ZERO);
	float = floatMake(0);
	int = intMake(0);
	uint = uIntMake(0);
	testTypes = [
		<TestType<Big>>{
			name: 'double',
			instance: double,
			zero: Big(0),
			inc: {
				base: Big(25),
				result: Big(26)
			},
			dec: {
				base: Big(12),
				result: Big(11)
			},
			add: {
				base: Big(4),
				opValue: Big(3),
				result: Big(7)
			}
		},
		<TestType<number>>{
			name: 'int',
			instance: int,
			zero: 0,
			inc: {
				base: 0,
				result: 1
			},
			dec: {
				base: 0,
				result: -1
			}
		},
		<TestType<number>>{
			name: 'uint',
			instance: uint,
			zero: 0,
			inc: {
				base: 0,
				result: 1
			},
			dec: {
				base: 8,
				result: 7
			},
			add: {
				base: 11,
				opValue: 13,
				result: 24
			}
		}
	];

	beforeEach(() => {
		double.reset();
		int.reset();
		uint.reset();
	});

	describe('Usage', () => {
		for (const testType of testTypes) {
			describe(`Type: ${testType.name}`, () => {
				describe('increment', () => {
					it(`should increment by 1 when the value is a number`, () => {
						const value = testType.inc.base;
						const result = testType.instance;
						result(value);
						expect(result()).toBe(value);
						result.increment();
						expect(result()).toBe(testType.inc.result);
					});

					it(`should return fallback when the value is null`, () => {
						const value = null;
						const result = testType.instance;
						result(value);
						result.increment();
						expect(result()).toBe(testType.zero);
					});
				});

				describe('decrement', () => {
					it(`should decrement by 1 when the value is a number`, () => {
						const result = testType.instance;
						result(testType.dec.base);
						expect(result()).toBe(testType.dec.base);
						result.decrement();
						expect(result()).toBe(testType.dec.result);
					});

					it(`should return fallback when the value is null`, () => {
						const value = null;
						const result = testType.instance;
						result(value);
						result.decrement();
						expect(result()).toBe(testType.zero);
					});
				});
			});
		}
	});
});
