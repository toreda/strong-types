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

import {booleanValue} from '../../src/boolean/value';

describe('booleanValue', () => {
	it(`should return fallback when value is undefined`, () => {
		const fallback = true;

		expect(booleanValue(undefined, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is null`, () => {
		const fallback = true;

		expect(booleanValue(null, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is a non-boolean`, () => {
		const fallback = true;

		expect(booleanValue('one-14901741', fallback)).toBe(fallback);
	});

	it(`should return value when value arg true`, () => {
		const fallback = false;
		const value = true;
		expect(booleanValue(value, fallback)).toBe(value);
	});

	it(`should return value when value arg is false`, () => {
		const fallback = true;
		const value = false;
		expect(booleanValue(value, fallback)).toBe(value);
	});
});
