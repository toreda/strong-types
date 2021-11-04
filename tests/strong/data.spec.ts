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

import {Rules} from '../../src/rules';
import {StrongData} from '../../src/strong/data';

const MOCK_INITIAL = 1;
const MOCK_FALLBACK_DEFAULT = 2;

const ZERO = 0;

describe('StrongData', () => {
	let instance: StrongData<number>;
	let rules: Rules<number>;

	beforeAll(() => {
		rules = new Rules<number>();

		instance = new StrongData<number>(MOCK_FALLBACK_DEFAULT, MOCK_INITIAL, rules, 'StrongType');
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Constructor', () => {
		it('should initialize value property to "initial" argument', () => {
			const sampleVal = 43141;

			const custom = new StrongData<number>(MOCK_FALLBACK_DEFAULT, sampleVal, rules, 'StrongType');
			expect(custom.value).toBe(sampleVal);
		});

		it('should initialize fallbackDefault property to "fallbackDefault" argument', () => {
			const sampleVal = 45101;

			const custom = new StrongData<number>(sampleVal, MOCK_INITIAL, rules, 'StrongType');
			expect(custom.fallbackDefault).toBe(sampleVal);
		});
	});

	describe('Implementation', () => {
		describe('set', () => {
			it(`should return false when value is undefined`, () => {
				expect(instance.set(undefined)).toBe(false);
			});

			it(`should set value to null return true when value is null`, () => {
				const value = 19824;
				instance.set(value);
				expect(instance.getNull()).toBe(value);
				expect(instance.set(null)).toBe(true);
				expect(instance.getNull()).toBeNull();
			});

			it(`should set value and return true for values which pass check`, () => {
				const value = 1101;
				expect(instance.check(value)).toBe(true);
				instance.set(0);
				expect(instance.getNull()).toBe(0);

				expect(instance.set(value)).toBe(true);
				expect(instance.getNull()).toBe(value);
			});
		});

		describe('div', () => {
			it(`should return 0 when divisor is 0`, () => {
				instance.set(10);
				expect(instance.div(ZERO)).toBe(0);
			});

			it(`should set and return zero when divisor is 0 and value is 0`, () => {
				instance.set(0);
				expect(instance.getNull()).toBe(0);

				expect(instance.div(ZERO)).toBe(0);
				expect(instance.getNull()).toBe(0);
			});

			it(`should set and return 0 when divisor is 0 and value is > 0`, () => {
				instance.set(10);
				expect(instance.getNull()).toBe(10);
				expect(instance.div(ZERO)).toBe(0);
				expect(instance.getNull()).toBe(0);
			});

			it(`should return null when divisor is undefined`, () => {
				instance.set(10);
				expect(instance.div(undefined as any)).toBeNull();
			});

			it(`should return null when divisor is null`, () => {
				instance.set(10);
				expect(instance.div(null as any)).toBeNull();
			});

			it(`should return null when divisor is not a number`, () => {
				instance.set(10);
				expect(instance.div('aaaaaaa' as any)).toBeNull();
			});


			it(`should return null when divisor is a number and current value is null`, () => {
				instance.set(null);
				expect(instance.div(10)).toBeNull();
			});

			it(`should set and return value current / divisor`, () => {
				instance.set(50);
				expect(instance.div(5)).toBe(10);
				expect(instance.getNull()).toBe(10);
			});

			it(`should return null when result is NaN`, ()=> {
				instance.set(100);
				expect(instance.div(NaN)).toBeNull();
			});
		});

		describe('mul', () => {
			it(`should return null when value arg is undefined`, () => {
				expect(instance.mul(undefined as any)).toBeNull();
			});

			it(`should return null when value arg is null`, () => {
				expect(instance.mul(null as any)).toBeNull();
			});

			it(`should return null when value arg is a truthy non-number`, () => {
				expect(instance.mul('1111971497' as any)).toBeNull();
			});

			it(`should return null when current value is null`, () => {
				instance.set(null);
				expect(instance.mul(10)).toBeNull();
			});

			it(`should set and return 0 when value arg is 0 and current value is a number`, () => {
				instance.set(100);
				expect(instance.mul(0)).toBe(0);
				expect(instance.getNull()).toBe(0);
			});

			it(`should set and return 0 when current value is 0 and value arg is a number`, () => {
				instance.set(0);
				expect(instance.mul(20)).toBe(0);
				expect(instance.getNull()).toBe(0);
			});

			it(`should set and return multiplied value arg and current value`, () => {
				instance.set(10);
				expect(instance.mul(10)).toBe(100);
			});
		});

		describe('add', () => {
			it(`should return null when result is NaN`, () => {
				instance.set(1000);
				expect(instance.add(NaN)).toBeNull();
			});

			it(`should return null when result exceeds JavaScript's MAX_VALUE`, () => {
				instance.set(Number.MAX_VALUE);
				expect(instance.add(Number.MAX_VALUE)).toBeNull();
			});

			it(`should return null when result exceeds Javascript's MIN_VALUE`, () => {
				instance.set(Number.MIN_SAFE_INTEGER + 1);
				const min = 100000 * -1;
				expect(instance.add(min)).toBeNull();
			});
		});

		describe('sub', () => {});

		describe('pow', () => {
			it(`should set and return 1 when value is 1 and pow is 0`, () => {
				instance.set(1);
				expect(instance.getNull()).toBe(1);
				expect(instance.pow(0)).toBe(1);
				expect(instance.getNull()).toBe(1);
			});

			it(`should set and return 0 when value is 0 and pow is 1`, () => {
				instance.set(0);
				expect(instance.getNull()).toBe(0);
				expect(instance.pow(1)).toBe(0);
				expect(instance.getNull()).toBe(0);
			});

			it(`should set and return 4 when value is 2 and pow is 2`, () => {
				instance.set(2);
				expect(instance.getNull()).toBe(2);
				expect(instance.pow(2)).toBe(4);
				expect(instance.getNull()).toBe(4);
			});

			it(`should set and return 4 when value is 2 and pow is 2`, () => {
				instance.set(2);
				expect(instance.getNull()).toBe(2);
				expect(instance.pow(2)).toBe(4);
				expect(instance.getNull()).toBe(4);
			});

			it(`should return null when current value is null`, () => {
				instance.set(null);
				expect(instance.pow(1)).toBeNull();
			});

			it(`should return null when result is NaN`, () => {
				instance.set(10);
				expect(instance.pow(NaN)).toBeNull();
			});

			it(`should return null when result exceeds max safe int`, () => {
				instance.set(100000000);
				expect(instance.pow(Number.MAX_SAFE_INTEGER)).toBeNull();
			});
		});
	});
});
