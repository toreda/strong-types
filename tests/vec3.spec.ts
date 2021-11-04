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
import {Vec3} from '../src/vec3';

const MOCK_X = 159;
const MOCK_Y = 134;
const MOCK_Z = 248;

describe('Vec3', () => {
	let instance: Vec3;

	beforeAll(() => {
		instance = new Vec3(Defaults.Vec.X, Defaults.Vec.Y, Defaults.Vec.Z);
	});

	describe('Constructor', () => {
		it('should not throw when args are null', () => {
			expect(() => {
				const custom = new Vec3(null, null, null);
			}).not.toThrow();
		});

		it('should create an instance of Vec3', () => {
			expect(instance).toBeInstanceOf(Vec3);
		});

		it('should have properties: x, y, z', () => {
			expect(instance.x).not.toBeUndefined();
			expect(instance.y).not.toBeUndefined();
			expect(instance.z).not.toBeUndefined();
		});

		it('x, y, z should return initial values', () => {
			expect(instance.x()).toBe(Defaults.Vec.X);
			expect(instance.y()).toBe(Defaults.Vec.Y);
			expect(instance.z()).toBe(Defaults.Vec.Z);
		});

		it(`should set x component to provided value when calling instance.x(value)`, () => {
			instance.x(MOCK_X);
			expect(instance.x()).toBe(MOCK_X);
		});

		it(`should set y component to provided value when calling instance.y(value)`, () => {
			instance.y(MOCK_Y);
			expect(instance.y()).toBe(MOCK_Y);
		});

		it(`should set z component to provided value when calling instance.z(value)`, () => {
			instance.z(MOCK_Z);
			expect(instance.z()).toBe(MOCK_Z);
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

		it(`should reset y property to default value`, () => {
			instance.z(88776661);
			expect(instance.z()).toBe(88776661);
			instance.reset();
			expect(instance.z()).toBe(Defaults.Vec.Z);
		});
	});
});
