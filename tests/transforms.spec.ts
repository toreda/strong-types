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
import {TransformNB} from '../src/transform/nb';
import {Transforms} from '../src/transforms';

const MOCK_STRING = 'oneoneone';
const MOCK_FALLBACK1 = '22222233333___11';

describe('Transforms', () => {
	let instance: Transforms<string>;

	beforeAll(() => {
		instance = new Transforms<string>(MOCK_FALLBACK1);
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Constructor', () => {
		it('shall pass', () => {});
	});

	describe('Implementation', () => {
		describe('add', () => {
			it('should return false when transform argument is null', () => {
				expect(instance.add(null as any)).toBe(false);
			});

			it('should return false when transform argument is undefined', () => {
				expect(instance.add(undefined as any)).toBe(false);
			});
		});

		describe('addNB', () => {
			it('should return false when transform argument is null', () => {
				expect(instance.addNB(null as any)).toBe(false);
			});

			it('should return false when transform argument is undefined', () => {
				expect(instance.addNB(undefined as any)).toBe(false);
			});

			it('should add exactly 1 element to transformsNB when argument is a transform', () => {
				const fn = jest.fn();
				const transformNB = new Transform<string>(fn);
				expect(instance.transformsNB).toHaveLength(0);
				instance.addNB(transformNB);
				expect(instance.transformsNB).toHaveLength(1);
			});
		});

		describe('run', () => {
			it('should return fallback default when value argument is null', () => {
				expect(instance.run(null as any)).toBe(MOCK_FALLBACK1);
			});

			it('should return fallback default when value argument is undefined', () => {
				expect(instance.run(undefined as any)).toBe(MOCK_FALLBACK1);
			});

			it('should return value argument when no transforms are applied', () => {
				const inputValue = 'one_one_two';
				expect(instance.transforms).toHaveLength(0);
				expect(instance.run(inputValue)).toBe(inputValue);
			});

			it('should execute all transforms', () => {
				const tf1 = jest.fn();
				tf1.mockImplementation((val: string) => {
					return val;
				});
				const transform1 = new Transform(tf1);

				const tf2 = jest.fn();
				tf1.mockImplementation((val: string) => {
					return val;
				});
				const transform2 = new Transform(tf2);
				const tf3 = jest.fn();
				tf3.mockImplementation((val: string) => {
					return val;
				});
				const transform3 = new Transform(tf3);

				instance.add(transform1);
				instance.add(transform2);
				instance.add(transform3);

				expect(tf1).not.toHaveBeenCalled();
				expect(tf2).not.toHaveBeenCalled();
				expect(tf3).not.toHaveBeenCalled();

				const val = 'aaaaaaaaaa4414';
				const result = instance.run(val);

				expect(tf1).toHaveBeenCalledTimes(1);
				expect(tf2).toHaveBeenCalledTimes(1);
				expect(tf3).toHaveBeenCalledTimes(1);
			});
		});

		describe('runNB', () => {
			it('should return null when value argument is null', () => {
				expect(instance.runNB(null as any)).toBeNull();
			});

			it('should return null when value argument is undefined', () => {
				expect(instance.runNB(undefined as any)).toBeNull();
			});

			it('should return value argument when no transforms are applied', () => {
				const inputValue = 'one_one_two';
				expect(instance.transforms).toHaveLength(0);
				expect(instance.runNB(inputValue)).toBe(inputValue);
			});

			it('should return a final value modified by each transform in order', () => {
				const fn1 = jest.fn();
				fn1.mockImplementation((a: number): number => {
					return a + 1;
				});
				const fn2 = jest.fn();
				fn2.mockImplementation((a: number): number => {
					return a * 2;
				});
				const fn3 = jest.fn();
				fn3.mockImplementation((a: number): number => {
					return a * 10;
				});
				const tf = new Transforms<number>(0);
				const nbt1 = new TransformNB<number>(fn1);
				const nbt2 = new TransformNB<number>(fn2);
				const nbt3 = new TransformNB<number>(fn3);
				tf.addNB(nbt1);
				tf.addNB(nbt2);
				tf.addNB(nbt3);
				expect(tf.runNB(0)).toBe(20);
			});
		});
	});
});
