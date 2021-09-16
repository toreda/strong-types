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
import {Vec4} from '../src/vec4';

const MOCK_X = 1081;
const MOCK_Y = 97141;
const MOCK_Z = 971971;
const MOCK_W = 60417;

describe('Vec4', () => {
	let instance: Vec4;

	beforeAll(() => {
		instance = new Vec4(MOCK_X, MOCK_Y, MOCK_Z, MOCK_W);
	});

	describe('Constructor', () => {
		it('should not throw when args are null', () => {
			expect(() => {
				new Vec4(null, null, null, null);
			}).not.toThrow();
		});

		it('should create an instance of Vec4', () => {
			expect(instance).toBeInstanceOf(Vec4);
		});

		it('should have properties: x, y, z, w', () => {
			expect(instance.x).not.toBeUndefined();
			expect(instance.y).not.toBeUndefined();
			expect(instance.z).not.toBeUndefined();
			expect(instance.w).not.toBeUndefined();
		});

		it(`should init x to provided x arg`, () => {
			expect(instance.x()).toBe(MOCK_X);
		});

		it(`should init y to provided y arg`, () => {
			expect(instance.y()).toBe(MOCK_Y);
		});

		it(`should init z to provided z arg`, () => {
			expect(instance.z()).toBe(MOCK_Z);
		});

		it(`should init w to provided w arg`, () => {
			expect(instance.w()).toBe(MOCK_W);
		});
	});

	describe('reset', () => {
		it(`should reset x property to default value`, () => {
			instance.x(660919);
			expect(instance.x()).toBe(660919);
			instance.reset();
			expect(instance.x()).toBe(Defaults.Vec.X);
		});

		it(`should reset y property to default value`, () => {
			instance.y(283100);
			expect(instance.y()).toBe(283100);
			instance.reset();
			expect(instance.y()).toBe(Defaults.Vec.Y);
		});

		it(`should reset z property to default value`, () => {
			instance.z(9099919);
			expect(instance.z()).toBe(9099919);
			instance.reset();
			expect(instance.z()).toBe(Defaults.Vec.Z);
		});

		it(`should reset w property to default value`, () => {
			instance.w(77191978);
			expect(instance.w()).toBe(77191978);
			instance.reset();
			expect(instance.w()).toBe(Defaults.Vec.W);
		});
	});
});
