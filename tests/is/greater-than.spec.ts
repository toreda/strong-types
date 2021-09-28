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

import {IsGT, isGTMake} from '../../src/is/gt';

import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';

const MOCK_TARGET = 44410;
const MOCK_CURR = 1111;

describe('IsGT', () => {
	let mods: RuleMods;
	let rule: Rule;
	let fn: IsGT<Rule>;

	beforeAll(() => {
		rule = new Rule();

		mods = {
			invert: false,
			target: 'value'
		};

		fn = isGTMake<Rule>(rule, rule, mods);
	});

	beforeEach(() => {
		mods.invert = false;
		mods.target = 'value';
		rule.reset();
	});

	describe('make', () => {
		it('should return a function', () => {});
	});

	describe('usage', () => {
		it('should return false when curr value argument is not a number', () => {
			const stringCurr = 'aaaa';
			fn(MOCK_TARGET);

			expect(rule.nodes[0].execute(stringCurr as any)).toBe(false);
		});

		it('should return false when target value is not a number', () => {
			const stringTarget = 'ffffffff';

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(stringTarget as any);
			expect(rule.nodes[0].execute(MOCK_CURR)).toBe(false);
		});

		it('should return false when both current and target arguments are 0', () => {
			const curr = 0;
			const target = 0;

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return true when both current and target arguments are 0 but invert flag is set', () => {
			const curr = 0;
			const target = 0;
			mods.invert = true;

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return false when current is less than target', () => {
			const curr = 13;
			const target = 55;

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return true when current is less than target but invert flag is set', () => {
			const curr = 13;
			const target = 55;
			mods.invert = true;

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive integer current is greater than positive integer target', () => {
			const curr = 25;
			const target = 10;

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive integer current is greater than negative integer target', () => {
			const curr = 25;
			const target = -10;

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when negative integer current is greater than negative integer target', () => {
			const curr = -2;
			const target = -10;

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive float current is greater than negative integer target', () => {
			const curr = 2.223;
			const target = -10;

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when negative float current is greater than negative integer target', () => {
			const curr = -3.3;
			const target = -10;

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive integer current is greater than negative integer target', () => {
			const curr = 25;
			const target = -10;

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive float current is greater than negative float target', () => {
			const curr = 4.4422;
			const target = -5.2111;

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when negative float current is greater than negative float target', () => {
			const curr = -7.11;
			const target = -11.5557;

			const fn = isGTMake<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});
	});
});
