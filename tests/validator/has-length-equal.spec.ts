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
import {makeHasLengthEqual} from '../../src/has/length-equal';

describe('HasLengthEqualTo', () => {
	let rule: Rule;

	beforeAll(() => {
		rule = new Rule();
	});

	beforeEach(() => {
		rule.reset();
	});

	describe('Usage', () => {
		it('should return true when target length is equal to the current length when the current value is a string', () => {
			const target = 3;
			const curr = 'dog';
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the target length is equal to the current length when the current value is an array', () => {
			const target = 2;
			const curr: string[] = ['dog', 'cat'];
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the current value and target value are equal', () => {
			const target = 0;
			const curr = '';
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the target and curr values are equal', () => {
			const target = 0;
			const curr: string[] = [];
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});
	});

	describe('invalid ouputs', () => {
		it('should return false when the target length does not equal the current length when the current value is a string', () => {
			const target = 4;
			const curr = 'number';

			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});
			fn(3);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is an empty string', () => {
			const target = '' as any;
			const curr = '1';

			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});
			fn(10);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target length does not equal the current length when the current value is an array', () => {
			const target = 2;
			const curr = ['one', 'two', 'three'];
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is an empty array', () => {
			const target = 2;
			const curr: string[] = [];
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is an empty array', () => {
			const target = [] as any;
			const curr = [6];
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is an integer', () => {
			const target = 2;
			const curr = 2;
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is a boolean', () => {
			const target = 65;
			const curr = false;
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is a boolean', () => {
			const target = false as any;
			const curr = ['hello'];
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});
	});
});
