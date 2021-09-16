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

import {DateTime, makeDateTime} from '../../src/date-time';

const MOCK_FALLBACK_DEFAULT = '2020-12-25T09:05:20';
const MOCK_FALLBACK = '2015-02-24T03:21:52';
const MOCK_INITIAL = '1886-05-30T18:45:36';

describe('DateTime', () => {
	describe('Implementation', () => {
		it('should set initial value to sampleInitial argument', () => {
			const sampleInitial = '2008-04-16T06:45:25';
			const result = makeDateTime(MOCK_INITIAL, sampleInitial);
			expect(result()).toBe(sampleInitial);
		});

		it('should not set value when called with a string', () => {
			const result = makeDateTime(MOCK_INITIAL, null);
			const sampleValue = 'Feb 5th';
			result(sampleValue);
			expect(result()).toBe(MOCK_INITIAL);
		});

		it('should not set value when called with an empty string', () => {
			const sampleFallback = '2020-08-28T21:00:52';
			const emptyString = '';
			const result = makeDateTime(sampleFallback, null);
			result(emptyString);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = '1520-06-27T21:25:23';
			const result = makeDateTime(sampleFallback, null);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when initial value is undefined', () => {
			const sampleFallback = '1886-12-25T12:15:41';
			const result = makeDateTime(sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a number', () => {
			const sampleFallback = '2021-08-15T02:21:15';
			const numberedValue = 5 as any;
			const result = makeDateTime(sampleFallback, null);
			result(numberedValue);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a boolean value', () => {
			const sampleFallback = '2011-02-29T21:51:52';
			const booleanValue = false as any;
			const result = makeDateTime(sampleFallback, null);
			result(booleanValue);
			expect(result()).toBe(sampleFallback);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = '2020-12-25T08:30:52';
				const string = makeDateTime(MOCK_FALLBACK_DEFAULT, null);
				expect(string.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = '1995-12-01T02:36:52';
				const string = makeDateTime(MOCK_FALLBACK_DEFAULT, sampleInitial);
				expect(string.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
