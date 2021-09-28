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

import {IsBoolean, isBooleanMake} from '../../src/is/boolean';

import {Rule} from '../../src/rule';

describe('IsBoolean', () => {
	let rule: Rule;
	let fn: IsBoolean<Rule>;

	beforeAll(() => {
		rule = new Rule();
		fn = isBooleanMake<Rule>(rule, rule, {invert: false, target: 'value'});
		fn();
	});

	describe('Usage', () => {
		it('should return false when input is a non-empty string and mods.invert is false', () => {
			const value = 'aaaaaaaaa';
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is an empty array and mods.invert is true', () => {
			const value: boolean[] = [];

			const customRule = new Rule();

			const customFn = isBooleanMake<Rule>(customRule, customRule, {invert: true, target: 'value'});
			customFn();
			expect(customRule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const value: string = 'aaaaaaaaa';

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a boolean (false)', () => {
			const value: boolean = false;

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a boolean (true) and invert flag is active', () => {
			const value: boolean = true;
			const customRule = new Rule();

			const customFn = isBooleanMake<Rule>(customRule, customRule, {invert: true, target: 'value'});
			customFn();
			expect(customRule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (false) and invert flag is active', () => {
			const value: boolean = false;
			const customRule = new Rule();

			const customFn = isBooleanMake<Rule>(customRule, customRule, {invert: true, target: 'value'});
			customFn();
			expect(customRule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a boolean (true)', () => {
			const value = true;

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true when input is a boolean (false)', () => {
			const value = false;

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a number', () => {
			const value = 101;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is an empty array', () => {
			const value: string[] = [];

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array', () => {
			const value = ['a', 'b', 'c'];

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
