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

import {IsDbl, isDblMake} from '../../src/is/dbl';

import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';

describe('Dbl', () => {
	let mods: RuleMods;
	let rule: Rule;
	let fn: IsDbl<Rule>;

	beforeAll(() => {
		mods = {
			invert: false,
			target: 'value'
		};
		rule = new Rule();
		fn = isDblMake<Rule>(rule, rule, mods);
		fn();
	});

	describe('isDblMake', () => {
		it('should return a function', () => {
			expect(typeof fn).toBe('function');
		});
	});

	describe('Usage', () => {
		it('should return false when curr is NaN', () => {
			expect(rule.nodes[0].execute(NaN)).toBe(false);
		});

		it('should return false when curr value is a string', () => {
			const str = '111111111';
			expect(rule.nodes[0].execute(str)).toBe(false);
		});

		it('should return true when curr a positive float', () => {
			const floatCurr = 1.333;

			expect(rule.nodes[0].execute(floatCurr)).toBe(true);
		});

		it('should return true when curr is a negative float', () => {
			const floatCurr = -7.333;

			expect(rule.nodes[0].execute(floatCurr)).toBe(true);
		});

		it('should return false when curr is a negative float, but invert flag is active', () => {
			const customRule = new Rule();
			const customFn = isDblMake<Rule>(customRule, customRule, {invert: true, target: 'value'});
			customFn();
			const floatCurr = -7.333;

			expect(customRule.nodes[0].execute(floatCurr)).toBe(false);
		});

		it('should return true when curr a positive integer', () => {
			const intCurr = 7;
			expect(rule.nodes[0].execute(intCurr)).toBe(true);
		});

		it('should return true when curr a negative integer', () => {
			const intCurr = -43;

			expect(rule.nodes[0].execute(intCurr)).toBe(true);
		});

		it('should return false when curr is a boolean, true (non-number)', () => {
			const curr = true;

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when curr is a boolean, false (non-number)', () => {
			const curr = false;

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when curr is an empty array (non-number)', () => {
			const curr: string[] = [];
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});
	});
});