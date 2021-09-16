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

import {httpMethodValid} from '../../../src/http/method/valid';
import {httpMethods} from '../../../src/http/methods';
const METHODS = httpMethods.keys();

describe('httpMethods', () => {
	it(`should be a function`, () => {
		expect(typeof httpMethodValid).toBe('function');
	});

	it(`should return false when method arg is undefined`, () => {
		expect(httpMethodValid(undefined)).toBe(false);
	});

	it(`should return false when method arg is null`, () => {
		expect(httpMethodValid(null)).toBe(false);
	});

	it(`should return false when method arg is a truthy non-string`, () => {
		expect(httpMethodValid(1114 as any)).toBe(false);
	});

	for (const method of METHODS) {
		it(`should support method in method set '${method}'`, () => {
			expect(httpMethodValid(method)).toBe(true);
		});
	}
});
