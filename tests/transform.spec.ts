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

import {Transform} from '../src/transform';
import {TransformFN} from '../src/transform/fn';

describe('Transform', () => {
	describe('Constructor', () => {
		it('should throw when fn argument is not provided', () => {
			expect(() => {
				const custom = new Transform<string>(undefined as any);
			}).toThrow('STTransform init failed - fn argument missing.');
		});

		it('should set id when provided in options argument', () => {
			const fn: TransformFN<string> = (value: string | null): string => {
				if (value === null) {
					return '';
				}

				return value;
			};

			const sampleId = 'AAA_@@@@@33321__334';
			const custom = new Transform<string>(fn, {
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
					const custom = new Transform<string>(fn, {});
					custom.run(sampleVal);
				}).not.toThrow();
			});

			it('should return original value argument if transform fn throws', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					throw new Error('woop woop');
				});
				const sampleVal = 'hi441091';
				const custom = new Transform<string>(fn, {});

				expect(custom.run(sampleVal)).toBe(sampleVal);
			});
		});
	});
});
