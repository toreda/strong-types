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

import type {Strong} from '../src/strong';
import {strongMake} from '../src/strong/make';

const MOCK_STRING = '113333';
const MOCK_FALLBACK = 'roman bree';
const FALLBACK = 'highmountain cheddar';

describe('Strong', () => {
	let strong: Strong<string>;

	beforeAll(() => {
		strong = strongMake<string>(FALLBACK);
	});

	beforeEach(() => {
		strong.reset();
	});

	describe('strongMake', () => {
		it('should make and return a function', () => {
			expect(typeof strong).toBe('function');
		});
	});

	describe('check', () => {
		it(`should return false when value arg is undefined`, () => {
			expect(strong.check()).toBe(false);
		});

		it(`should return false when value arg is null`, () => {
			expect(strong.check()).toBe(false);
		});
	});

	describe('Strong Obj', () => {
		it('should return current value when called with no arguments', () => {
			const sampleStr = '44198657635';
			expect(strong()).not.toBe(sampleStr);
			strong(sampleStr);
			expect(strong()).toBe(sampleStr);
		});

		it(`should return value to set when called with an argument`, () => {
			const sampleStr = '97991721235';
			expect(strong()).not.toBe(sampleStr);
			expect(strong(sampleStr)).toBe(sampleStr);
			strong(sampleStr);
		});

		it('should return default fallback value is not provided and value is undefined', () => {
			expect(strong()).toBe(FALLBACK);
		});

		it('should return fallback default when invoked with no arguments and value has been set to null', () => {
			const value = '19714971974';
			strong(value);
			expect(strong()).toBe(value);
			strong(null);
			expect(strong()).toBe(FALLBACK);
		});

		it('should return default fallback value argument is not provided and value is null', () => {
			const custom = strongMake<string>(FALLBACK, null);
			expect(custom()).toBe(FALLBACK);
		});

		it('should return default value when called with no initial value', () => {
			const initialStr = undefined;
			const custom = strongMake<string>(FALLBACK, initialStr);
			expect(custom()).toBe(FALLBACK);
		});
	});

	describe('make', () => {
		describe('types', () => {
			describe('get', () => {
				it('should return provided fallback when value is null', () => {
					const sampleStr = '9419814981';
					strong(null);
					expect(strong.get(sampleStr)).toBe(sampleStr);
				});

				it('should return the fallback default when value is null and provided fallback is not valid', () => {
					const sampleStr = '4098211872';
					const st = strongMake<string>(sampleStr, MOCK_STRING);
					st(null);
					expect(st.get(undefined as any)).toBe(sampleStr);
				});
			});

			describe('getNull', () => {
				it('should return value when value is not null', () => {
					const sampleStr = '6766199823';
					strong(sampleStr);

					expect(strong.getNull()).toBe(sampleStr);
				});

				it('should return null when value is null', () => {
					strong(null);
					expect(strong.getNull()).toBeNull();
				});
			});

			describe('reset', () => {
				it('should set value to null when value is set by initial value', () => {
					const custom = strongMake<string>(FALLBACK, null);
					expect(custom.getNull()).toBeNull();
				});

				it('should reset value to fallback', () => {
					const sampleStr = '881032091';
					strong(sampleStr);
					expect(strong()).toBe(sampleStr);
					strong.reset();
					expect(strong.getNull()).toBeNull();
					expect(strong()).toBe(FALLBACK);
				});

				it('should not throw when value is already null', () => {
					strong(null);
					expect(() => {
						strong.reset();
					}).not.toThrow();
					expect(strong.getNull()).toBeNull();
				});

				it('should not throw when called repeatedly', () => {
					expect(() => {
						for (let i = 0; i < 4; i++) {
							strong.reset();
						}
					}).not.toThrow();
					expect(strong.getNull()).toBeNull();
				});
			});
		});
	});
});
