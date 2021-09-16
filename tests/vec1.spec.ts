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

import {Defaults} from '../src/defaults';
import {Vec1} from '../src/vec1';

const MOCK_X = 77190;

describe('Vec1', () => {
	let instance: Vec1;

	beforeAll(() => {
		instance = new Vec1(MOCK_X);
	});

	describe('Constructor', () => {
		it('should not throw when args are null', () => {
			expect(() => {
				const custom = new Vec1(null);
			}).not.toThrow();
		});

		it('should create an instance of Vec1', () => {
			expect(instance).toBeInstanceOf(Vec1);
		});

		it('should have properties: x', () => {
			expect(instance.x).not.toBeUndefined();
		});

		it('x should return expected value', () => {
			expect(instance.x()).toBe(MOCK_X);
		});
	});

	describe('reset', () => {
		it(`should reset x property to default value`, () => {
			instance.x(881340);
			expect(instance.x()).toBe(881340);
			instance.reset();
			expect(instance.x()).toBe(Defaults.Vec.X);
		});
	});
});
