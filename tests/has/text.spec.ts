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

import {HasText, hasTextMake} from '../../src/has/text';

import {Rule} from '../../src/rule';

describe('HasText', () => {
	let rule: Rule;
	let fn: HasText<Rule>;

	beforeAll(() => {
		rule = new Rule();
		fn = hasTextMake<Rule>(rule, rule, {invert: false, target: 'value'});
	});

	describe('Usage', () => {
		it(`should return true when target string exactly matches current text`, () => {
			fn('zebra');
			expect(rule.nodes[0].execute('zebra')).toBe(true);
		});

		it(`should return true when current string starts with target text`, () => {
			fn('zebra-ELEPHANT-TIGER');
			expect(rule.nodes[0].execute('zebra')).toBe(true);
		});

		it(`should return true when current string contains target text as part of a longer string`, () => {
			fn('ELEPHANT-zebra-TIGER');
			expect(rule.nodes[0].execute('zebra')).toBe(true);
		});

		it(`should return false when target is an empty string`, () => {
			fn('ELEPHANT-zebra-TIGER');
			expect(rule.nodes[0].execute('zebra')).toBe(true);
		});

		it(`should return false when target is an empty array`, () => {
			fn('BADGET-badger-BADGER');
			expect(rule.nodes[0].execute([])).toBe(false);
		});
	});
});
