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

import {UInt, makeUInt} from '../../src/uint';

const MOCK_INITIAL = 4410;
const MOCK_FALLBACK_DEFAULT = 99121;
const MOCK_FALLBACK = 172091;

describe('UInt', () => {
	describe('Implementation', () => {
		it('should set value to initialValue argument', () => {
			const sampleInitial = 11098;
			const uint = makeUInt(MOCK_FALLBACK_DEFAULT, sampleInitial);
			expect(uint()).toBe(sampleInitial);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = 999981;
			const uint = makeUInt(sampleFallback, null);
			expect(uint()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = 684257;
			const result = makeUInt(sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should set value when called with non-null value', () => {
			const uint = makeUInt(MOCK_FALLBACK_DEFAULT, null);
			const sampleValue = 140781;
			uint(sampleValue);
			expect(uint()).toBe(sampleValue);
		});

		it('should not set value when called with a negative value', () => {
			const sampleFallbackDefault = 37192;
			const negativeInt = -14409;
			const uint = makeUInt(sampleFallbackDefault, null);
			uint(negativeInt);
			expect(uint()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with a negative decimal value', () => {
			const sampleFallbackDefault = 333221;
			const negativeFloat = -55.3;
			const uint = makeUInt(sampleFallbackDefault, null);
			uint(negativeFloat);
			expect(uint()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with a positive decimal value', () => {
			const sampleFallbackDefault = 3900001;
			const positiveFloat = 22.333;
			const uint = makeUInt(sampleFallbackDefault, null);
			uint(positiveFloat);
			expect(uint()).toBe(sampleFallbackDefault);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = 8810992;
				const uint = makeUInt(MOCK_FALLBACK_DEFAULT, null);
				expect(uint.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = 3101;

				const uint = makeUInt(MOCK_FALLBACK_DEFAULT, sampleInitial);
				expect(uint.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
