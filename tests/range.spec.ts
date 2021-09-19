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

import {Range} from '../src/range';
import {StrongMap} from '../src/map';

const expectedMin = 19384;
const expectedMax = 91278;

describe('Range', () => {
	let instance: Range;

	describe('Constructor', () => {
		beforeAll(() => {
			instance = new Range(expectedMin, expectedMax);
		});

		it('should not throw when args are null', () => {
			expect(() => {
				new Range(null, null);
			}).not.toThrow();
		});

		it('should create an instance of StrongMap', () => {
			expect(instance).toBeInstanceOf(StrongMap);
		});

		it('should have two properties, min and max', () => {
			expect(instance.min).not.toBeUndefined();
			expect(instance.max).not.toBeUndefined();
		});

		it('min and max should return expected values', () => {
			expect(instance.min()).toBe(expectedMin);
			expect(instance.max()).toBe(expectedMax);
		});
	});

	describe('in', () => {
		beforeEach(() => {
			instance.reset();
		});

		describe('inclusive mode', () => {
			it(`should return true when value, min, and max have the same value`, () => {
				instance.min(8);
				instance.max(8);

				expect(instance.in(8)).toBe(true);
			});
		});

		describe('exclusive mode', () => {
			it(`should return false when value, min, and max have the same value`, () => {
				instance.min(9);
				instance.max(9);

				expect(instance.in(9, true)).toBe(false);
			});

			it(`should return true when value is between min and max`, () => {
				instance.min(10);
				instance.max(20);

				expect(instance.in(15, true)).toBe(true);
			});
		});
	});

	describe('reset', () => {
		it(`should reset min to fallback value`, () => {
			const min = 779;
			const custom = new Range(min, 1000);
			custom.min(10);
			expect(custom.min()).toBe(10);
			custom.reset();
			expect(custom.min()).toBe(min);
		});

		it(`should reset max to fallback value`, () => {
			const max = 6661;
			const custom = new Range(0, max);
			custom.max(10);
			expect(custom.max()).toBe(10);
			custom.reset();
			expect(custom.max()).toBe(max);
		});
	});
});
