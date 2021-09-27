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

import {Float, floatMake} from '../src/float';

const MOCK_INITIAL = 5246576;
const MOCK_FALLBACK_DEFAULT = 6.5;
const MOCK_FALLBACK = -9.596596;

describe('Float', () => {
	describe('Implementation', () => {
		it('should set value to initialValue argument', () => {
			const sampleInitial = 5.785216;
			const result = floatMake(MOCK_FALLBACK_DEFAULT, sampleInitial);
			expect(result()).toBe(sampleInitial);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = 999981;
			const result = floatMake(sampleFallback, null);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = 5.664546634;
			const result = floatMake(sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should set value when called with non-null value', () => {
			const sampleValue = 14.81;
			const result = floatMake(MOCK_INITIAL, null);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a negative value', () => {
			const sampleValue = -15566;
			const result = floatMake(MOCK_FALLBACK, null);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a negative decimal value', () => {
			const sampleValue = -1.855555551;
			const result = floatMake(MOCK_FALLBACK_DEFAULT, null);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a positive value', () => {
			const sampleValue = 85646466526;
			const result = floatMake(MOCK_INITIAL, null);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a positive decimal value', () => {
			const sampleValue = 7.454561616;
			const result = floatMake(MOCK_FALLBACK_DEFAULT, null);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a 0 value', () => {
			const sampleValue = 0;
			const result = floatMake(MOCK_FALLBACK, null);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should not set value when called with an array', () => {
			const sampleFallbackDefault = 3900001;
			const arrayValue = [546151] as any;
			const result = floatMake(sampleFallbackDefault, null);
			result(arrayValue);
			expect(result()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with a boolean', () => {
			const sampleFallbackDefault = -4512.25565;
			const booleanValue = false as any;
			const result = floatMake(sampleFallbackDefault, null);
			result(booleanValue);
			expect(result()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with a string', () => {
			const sampleFallbackDefault = 3.55551;
			const stringValue = '6' as any;
			const result = floatMake(sampleFallbackDefault, null);
			result(stringValue);
			expect(result()).toBe(sampleFallbackDefault);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = 8810992;
				const result = floatMake(MOCK_FALLBACK_DEFAULT, null);
				expect(result.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = -31.01;
				const result = floatMake(MOCK_FALLBACK_DEFAULT, sampleInitial);
				expect(result.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
