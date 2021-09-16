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

import {Rule} from '../src/rule';
import {typeMatch} from '../src/is/type';

describe('types-match', () => {
	it('should be a function', () => {
		expect(typeof typeMatch).toBe('function');
	});

	describe('number validation', () => {
		it('should return true for 0 matching number type', () => {
			expect(typeMatch(0, 'number')).toBe(true);
		});

		it('should return true for 1 matching number type', () => {
			expect(typeMatch(1, 'number')).toBe(true);
		});

		it('should return true for -1 matching number type', () => {
			expect(typeMatch(-1, 'number')).toBe(true);
		});

		it("should return false for '1' matching number type", () => {
			expect(typeMatch('1', 'number')).toBe(false);
		});

		it("should return false for '0' matching number type", () => {
			expect(typeMatch('0', 'number')).toBe(false);
		});
	});

	describe('string validation', () => {
		it('should return true for hello matching string type', () => {
			expect(typeMatch('hello', 'string')).toBe(true);
		});

		it('should return true for empty quotes matching string type', () => {
			expect(typeMatch('', 'string')).toBe(true);
		});

		it('should return true for empty quotes with spaces matching string type', () => {
			expect(typeMatch(' ', 'string')).toBe(true);
		});

		it("should return true for '1' matching string type", () => {
			expect(typeMatch('1', 'string')).toBe(true);
		});

		it("should return true for '0' matching string type", () => {
			expect(typeMatch('0', 'string')).toBe(true);
		});

		it("should return true for '-1' matching string type", () => {
			expect(typeMatch('-1', 'string')).toBe(true);
		});

		it('should return true for number casted to string matching string type', () => {
			const num = 441091;
			const str = num.toString();
			expect(typeMatch(str, 'string')).toBe(true);
		});
	});

	describe('boolean validation', () => {
		it('should return true for true matching boolean type', () => {
			expect(typeMatch(true, 'boolean')).toBe(true);
		});

		it('should return true for false matching boolean type', () => {
			expect(typeMatch(false, 'boolean')).toBe(true);
		});

		it('should return false for 1 matching boolean type', () => {
			expect(typeMatch(1, 'boolean')).toBe(false);
		});

		it('should return false for 0 matching boolean type', () => {
			expect(typeMatch(0, 'boolean')).toBe(false);
		});
	});

	describe('number validation', () => {
		it('should return true for number literal 12', () => {
			expect(typeMatch(12, 'number')).toBe(true);
		});

		it('should return true for number literal 0', () => {
			expect(typeMatch(0, 'number')).toBe(true);
		});

		it('should return true for number literal -10', () => {
			expect(typeMatch(-10, 'number')).toBe(true);
		});

		it('should return true for number literal -15.5', () => {
			expect(typeMatch(-15.5, 'number')).toBe(true);
		});

		it('should return true for literal 22.333', () => {
			expect(typeMatch(23.333, 'number')).toBe(true);
		});
	});

	describe('Rule validation', () => {
		it('should return true for Rule', () => {
			const rule = new Rule();
			expect(typeMatch(rule, Rule)).toBe(true);
		});
	});
});
