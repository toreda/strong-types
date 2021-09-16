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
import {Vec2} from '../src/vec2';

const MOCK_X = 77911;
const MOCK_Y = 88190;

describe('Vec2', () => {
	let instance: Vec2;

	beforeAll(() => {
		instance = new Vec2(MOCK_X, MOCK_Y);
	});

	describe('Constructor', () => {
		it('should not throw when args are null', () => {
			expect(() => {
				const custom = new Vec2(null, null);
			}).not.toThrow();
		});

		it('should create an instance of Vec2', () => {
			expect(instance).toBeInstanceOf(Vec2);
		});

		it('should have properties: x, y', () => {
			expect(instance.x).not.toBeUndefined();
			expect(instance.y).not.toBeUndefined();
		});

		it(`should init x to provided x arg`, () => {
			expect(instance.x()).toBe(MOCK_X);
		});

		it(`should init y to provided y arg`, () => {
			expect(instance.y()).toBe(MOCK_Y);
		});
	});

	describe('reset', () => {
		it(`should reset x property to default value`, () => {
			instance.x(881340);
			expect(instance.x()).toBe(881340);
			instance.reset();
			expect(instance.x()).toBe(Defaults.Vec.X);
		});

		it(`should reset y property to default value`, () => {
			instance.y(667181);
			expect(instance.y()).toBe(667181);
			instance.reset();
			expect(instance.y()).toBe(Defaults.Vec.X);
		});
	});
});
