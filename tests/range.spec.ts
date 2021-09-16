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
});
