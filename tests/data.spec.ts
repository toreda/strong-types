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

import {StrongData} from '../src/strong/data';

const MOCK_INITIAL = 1;
const MOCK_FALLBACK_DEFAULT = 2;
const MOCK_FALLBACK = 33;

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

		it('should initialize state property', () => {
			const custom = new StrongData<number>(MOCK_FALLBACK, MOCK_INITIAL);
			expect(custom).toHaveProperty('state');
		});
	});
});
