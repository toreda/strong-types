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

import {StrongData} from '../../src/strong/data';

const MOCK_INITIAL = 1;
const MOCK_FALLBACK_DEFAULT = 2;
const MOCK_FALLBACK = 33;

const ZERO = 0;
const MATH_EX = {};

const MATH_CASES = [];

const MATH_OPS = {
	mul: []
};

describe('StrongData', () => {
	let instance: StrongData<number>;

	beforeAll(() => {
		instance = new StrongData<number>(MOCK_FALLBACK_DEFAULT, MOCK_INITIAL);
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Constructor', () => {
		it('should initialize value property to "initial" argument', () => {
			const sampleVal = 43141;

			const custom = new StrongData<number>(MOCK_FALLBACK_DEFAULT, sampleVal);
			expect(custom.value).toBe(sampleVal);
		});

		it('should initialize fallbackDefault property to "fallbackDefault" argument', () => {
			const sampleVal = 45101;

			const custom = new StrongData<number>(sampleVal, MOCK_INITIAL);
			expect(custom.fallbackDefault).toBe(sampleVal);
		});
	});

	describe('Implementation', () => {
		describe('div', () => {
			it(`should return null when divisor is 0`, () => {
				expect(instance.mul(ZERO)).toBeNull();
			});

			it(`should set and return zero when divisor is 0 and value is 0`, () => {
				instance.set(0);
				expect(instance.getNull()).toBe(0);

				expect(instance.mul(ZERO)).toBe(0);
				expect(instance.getNull()).toBe(0);
			});

			it(`should set and return 0 when divisor is 0 and value is > 0`, () => {
				instance.set(10);
				expect(instance.getNull()).toBe(10);
				expect(instance.mul(ZERO)).toBe(0);
				expect(instance.getNull()).toBe(0);
			});
		});

		describe('add', () => {});

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
		});
	});
});
