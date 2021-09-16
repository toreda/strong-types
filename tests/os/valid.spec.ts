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

import {osSet} from '../../src/os/set';
import {osValid} from '../../src/os/valid';

describe('osValid', () => {});

const OS_KEYS = osSet.keys();

describe('osValid', () => {
	it(`should be a function`, () => {
		expect(typeof osValid).toBe('function');
	});

	it(`should return false when method arg is undefined`, () => {
		expect(osValid(undefined)).toBe(false);
	});

	it(`should return false when method arg is null`, () => {
		expect(osValid(null)).toBe(false);
	});

	it(`should return false when method arg is a truthy non-string`, () => {
		expect(osValid(1114 as any)).toBe(false);
	});

	for (const archKey of OS_KEYS) {
		it(`should support method in method set '${archKey}'`, () => {
			expect(osValid(archKey)).toBe(true);
		});
	}
});
