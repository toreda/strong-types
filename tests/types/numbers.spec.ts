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

import {Dbl, dblMake} from '../../src/dbl';
import {Int, intMake} from '../../src/int';
import {UInt, uIntMake} from '../../src/uint';

interface TestType {
	name: string;
	instance: any;
}

let double: Dbl;
let int: Int;
let uint: UInt;
let testTypes: TestType[];

describe('numberMethods', () => {
	double = dblMake(0);
	int = intMake(0);
	uint = uIntMake(0);
	testTypes = [
		{name: 'double', instance: double},
		{name: 'int', instance: int},
		{name: 'uint', instance: uint}
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
						const value = 5;
						const result = testType.instance;
						result(value);
						expect(result()).toBe(value);
						result.increment();
						expect(result()).toBe(6);
					});

					it(`should return fallback when the value is null`, () => {
						const value = null;
						const result = testType.instance;
						result(value);
						result.increment();
						expect(result()).toBe(0);
					});
				});

				describe('decrement', () => {
					it(`should decrement by 1 when the value is a number`, () => {
						const value = 5;
						const result = testType.instance;
						result(value);
						expect(result()).toBe(value);
						result.decrement();
						expect(result()).toBe(4);
					});

					it(`should return fallback when the value is null`, () => {
						const value = null;
						const result = testType.instance;
						result(value);
						result.decrement();
						expect(result()).toBe(0);
					});
				});
			});
		}
	});
});
