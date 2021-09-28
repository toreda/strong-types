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
import {IsIpv4Addr} from '../../src/is/ipv4/addr';
import {Rule} from '../../src/rule';
import {isIpv4AddrMake} from '../../src/is/ipv4/addr/make';

describe('IsIpv4Addr', () => {
	let rule: Rule;
	let fn: IsIpv4Addr<Rule>;

	beforeAll(() => {
		rule = new Rule();
		fn = isIpv4AddrMake<Rule>(rule, rule, {invert: false, target: 'value'});
		fn();
	});

	describe('Usage', () => {
		describe('valid input', () => {
			it('should return true for a valid ipv4 address', () => {
				const currentValue = '127.0.0.1';

				expect(rule.nodes[0].execute(currentValue)).toBe(true);
			});
		});

		describe('invalid inputs', () => {
			it('should return false for an ipv4 address with leading zeros', () => {
				const currentValue = '0.034.054.212';

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should return false for an ipv4 address with invalid values', () => {
				const currentValue = '259.134.154.212';

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should return false for invalid string value', () => {
				const currentValue = '123';

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject Ipv4 address array input', () => {
				const currentValue = ['255.255.255.255'] as any;

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty array input', () => {
				const currentValue = [] as any;

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty object input', () => {
				const currentValue = {} as any;

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject undefined input', () => {
				const currentValue = undefined as any;

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject null input', () => {
				const currentValue = null as any;

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject boolean input', () => {
				const currentValue = false as any;

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});
		});
	});
});
