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

import {TransformFNNB} from '../src/transform/fn/nb';
import {TransformNB} from '../src/transform/nb';

describe('TransformNB', () => {
	describe('Constructor', () => {
		it('should throw when fn argument is undefined', () => {
			expect(() => {
				const custom = new TransformNB<string>(undefined as any);
			}).toThrow('Bad TransformNB init - fn arg missing.');
		});

		it('should set id when provided in options argument', () => {
			const fn: TransformFNNB<string> = (value: string | null): string | null => {
				return value;
			};
			const sampleId = 'AAA_@@@@@33321__334';
			const custom = new TransformNB<string>(fn, {
				id: sampleId
			});

			expect(custom.id).toBe(sampleId);
		});
	});

	describe('Implementation', () => {
		describe('run', () => {
			it('should not throw when transform fn throws', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					throw new Error('woop woop');
				});

				expect(() => {
					const sampleVal = 'hello225425';
					const custom = new TransformNB<string>(fn, {});
					custom.run(sampleVal);
				}).not.toThrow();
			});

			it('should return original value argument if transform fn throws', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					throw new Error('woop woop');
				});
				const sampleVal = 'hi_30091';
				const custom = new TransformNB<string>(fn, {});

				expect(custom.run(sampleVal)).toBe(sampleVal);
			});

			it('should return null when transform fn returns null', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return null;
				});
				const sampleVal = 'hi_223134';
				const custom = new TransformNB<string>(fn, {});

				expect(custom.run(sampleVal)).toBeNull();
			});

			it('should not throw when value argument is null', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return null;
				});
				const sampleVal = 'hi_223134';
				const custom = new TransformNB<string>(fn, {});
				expect(() => {
					custom.run(null);
				}).not.toThrow();
			});

			it('should pass value argument to transform fn when value is null', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return null;
				});
				const custom = new TransformNB<string>(fn, {});
				custom.run(null);
				expect(fn).toHaveBeenCalledTimes(1);
				expect(fn).toHaveBeenCalledWith(null);
			});
		});
	});
});
