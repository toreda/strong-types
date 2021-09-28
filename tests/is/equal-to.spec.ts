/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2021 Toreda, Inc.
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
import {isEqualMake} from '../../src/is/equal';

const EMPTY_ARRAY: string[] = [];

describe('IsEqual', () => {
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
		mods.target = 'value';
		rule.reset();
	});

	describe('Usage', () => {
		describe('strings', () => {
			it('should return true when comparing different strings with same value', () => {
				const value = 'aaaaaaaaa';
				const value2 = 'aaaaaaaaa';
				const fn = isEqualMake<Rule>(rule, rule, mods);
				fn(value);
				expect(rule.nodes[0].execute(value2)).toBe(true);
			});

			it('should return false when comparing different strings with same value and mods.invert is true', () => {
				const value = 'aaaaaaaaa';
				const value2 = 'aaaaaaaaa';
				mods.invert = true;

				const fn = isEqualMake<Rule>(rule, rule, mods);
				fn(value);
				expect(rule.nodes[0].execute(value2)).toBe(false);
			});
		});

		describe('numbers', () => {
			it('should return true when comparing 0 and 0', () => {
				const value = 0;
				const value2 = 0;

				const fn = isEqualMake<Rule>(rule, rule, mods);
				fn(value);
				expect(rule.nodes[0].execute(value2)).toBe(true);
			});

			it('should return true when comparing 1 and 1', () => {
				const value = 1;
				const value2 = 1;

				const fn = isEqualMake<Rule>(rule, rule, mods);
				fn(value);
				expect(rule.nodes[0].execute(value2)).toBe(true);
			});
		});

		describe('arrays', () => {
			it('should return true when comparing two empty arrays', () => {
				const target: string[] = [];

				const fn = isEqualMake<Rule>(rule, rule, mods);
				fn(target);
				expect(rule.nodes[0].execute(EMPTY_ARRAY)).toBe(true);
			});

			it('should return true when comparing two arrays each with 1 identical element', () => {
				const val = 'a45982';
				const current = [val];
				const target = [val];

				const fn = isEqualMake<Rule>(rule, rule, mods);
				fn(target);
				expect(rule.nodes[0].execute(current)).toBe(true);
			});

			it('should return false when comparing two arrays with different lengths', () => {
				const current = ['one', 'two'];
				const target = ['one', 'two', 'three'];

				const fn = isEqualMake<Rule>(rule, rule, mods);
				fn(target);
				expect(rule.nodes[0].execute(current)).toBe(false);
			});

			it('should return false when comparing two arrays with the same length but different elements', () => {
				const current = ['one', 'two', 'four'];
				const target = ['one', 'two', 'five'];

				const fn = isEqualMake<Rule>(rule, rule, mods);
				fn(target);
				expect(rule.nodes[0].execute(current)).toBe(false);
			});
		});

		describe('unsupported types', () => {
			it('should return false when current value is undefined', () => {
				const current = undefined;
				const target = 1000;

				const fn = isEqualMake<Rule>(rule, rule, mods);
				fn(target);
				expect(rule.nodes[0].execute(current)).toBe(false);
			});

			it('should return false when target value is undefined', () => {
				const current = 4981;
				const target = undefined;

				const fn = isEqualMake<Rule>(rule, rule, mods);
				fn(target);
				expect(rule.nodes[0].execute(current)).toBe(false);
			});

			it('should return true when current and target values are undefined', () => {
				const current = 2222;
				const target = 2222;

				const fn = isEqualMake<Rule>(rule, rule, mods);
				fn(target);
				expect(rule.nodes[0].execute(current)).toBe(true);
			});
		});
	});
});
