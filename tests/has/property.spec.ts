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
import {hasPropertyMake} from '../../src/has/property';

describe('HasProperty', () => {
	let mods: RuleMods;
	let rule: Rule;

	beforeAll(() => {
		rule = new Rule();
		mods = {
			invert: false,
			target: 'value'
		};
	});

	beforeEach(() => {
		mods.invert = false;
		rule.reset();
	});

	describe('valid input', () => {
		it('should return true when the object property matches the propName', () => {
			const obj = {age: '50'};
			const propName = 'age';

			const fn = hasPropertyMake<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});

		it('should return false when the object does not have property with propName', () => {
			const obj = {number: '50'};
			const propName = 'age';

			const fn = hasPropertyMake<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when target object is empty', () => {
			const obj = {};
			const propName = 'age';

			const fn = hasPropertyMake<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when the object is equal to an empty array', () => {
			const obj: string[] = [];
			const propName = 'age';

			const fn = hasPropertyMake<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when object is equal to a string', () => {
			const obj = 'age';
			const propName = 'age';

			const fn = hasPropertyMake<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when the object is equal to a number', () => {
			const obj = 50;
			const propName = 'age';

			const fn = hasPropertyMake<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when the object is equal to a boolean', () => {
			const obj = true;
			const propName = 'age';

			const fn = hasPropertyMake<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});
	});

	describe('invalid input', () => {
		it('should return false when obj is undefined', () => {
			const obj = undefined;
			const propName = 'name';

			const fn = hasPropertyMake<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when obj is null', () => {
			const obj = null;
			const propName = 'breed';

			const fn = hasPropertyMake<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});
	});
});
