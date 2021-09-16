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

import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeHasPropertyWithType} from '../../src/has/property-with-type';

describe('HasPropertyWithType', () => {
	let mods: RuleMods;
	let rule: Rule;

	beforeAll(() => {
		rule = new Rule();
		mods = {
			invert: false
		};
	});

	beforeEach(() => {
		mods.invert = false;
		rule.reset();
	});

	describe('Usage', () => {
		it('should return true when the property matches the propName and type of property matches the typeName', () => {
			const obj = {age: '50'};
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});
	});

	describe('invalid input', () => {
		it('should return false when the object property does not match the propName', () => {
			const obj = {number: '50'};
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is empty', () => {
			const obj = {};
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is equal to an empty array', () => {
			const obj: string[] = [];
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is equal to a random string', () => {
			const obj = 'age';
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is equal to a number', () => {
			const obj = 50;
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is equal to a boolean', () => {
			const obj = false;
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when obj is undefined', () => {
			const obj = undefined;
			const propName = 'name';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when obj is null', () => {
			const obj = null;
			const propName = 'breed';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});
	});
});
