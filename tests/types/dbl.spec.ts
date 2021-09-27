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

import {dblMake} from '../../src/dbl';

const MOCK_INITIAL = BigInt(5246576);
const MOCK_FALLBACK_DEFAULT = BigInt(6);
const MOCK_FALLBACK = BigInt(-991);

const BIG_ZERO = BigInt(0);
const BIG_ONE = BigInt(1);

describe('Double', () => {
	describe('Implementation', () => {
		it('should set value to initialValue argument', () => {
			const sampleInitial = BigInt(999.787781216);
			const result = dblMake(MOCK_FALLBACK_DEFAULT, sampleInitial);
			expect(result()).toBe(sampleInitial);
		});

		it('should return fallback default when value is null', () => {
			const result = dblMake(MOCK_FALLBACK, null);
			expect(result()).toBe(MOCK_FALLBACK);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = BigInt(522521);
			const result = dblMake(sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should set value when called with non-null value', () => {
			const sampleValue = BigInt(17777);
			const result = dblMake(MOCK_INITIAL, null);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a negative value', () => {
			const sampleValue = BigInt(-7719714);
			const result = dblMake(MOCK_FALLBACK, null);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a positive value', () => {
			const sampleValue = BigInt(661411236526);
			const result = dblMake(MOCK_INITIAL, null);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a 0 value', () => {
			const sampleValue = 0;
			const result = dblMake(MOCK_FALLBACK, null);
			result(BIG_ZERO);
			expect(result()).toBe(sampleValue);
		});

		it('should not set value when called with an array', () => {
			const sampleFallbackDefault = BigInt(39777001);
			const arrayValue = [BigInt(546151)] as any;
			const result = dblMake(sampleFallbackDefault, null);
			result(arrayValue);
			expect(result()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with a boolean', () => {
			const sampleFallbackDefault = BigInt(-48812.25565);
			const booleanValue = false as any;
			const result = dblMake(sampleFallbackDefault, null);
			result(booleanValue);
			expect(result()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with a string', () => {
			const sampleFallbackDefault = BigInt(2929.2222);
			const stringValue = '6' as any;
			const result = dblMake(sampleFallbackDefault, null);
			result(stringValue);
			expect(result()).toBe(sampleFallbackDefault);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = BigInt(22210992);
				const result = dblMake(MOCK_FALLBACK_DEFAULT, null);
				expect(result.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = BigInt(-222.01);
				const result = dblMake(MOCK_FALLBACK_DEFAULT, sampleInitial);
				expect(result.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
