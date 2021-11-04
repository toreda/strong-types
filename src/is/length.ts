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

import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

/**
 * Type signature for isLength validators used in rule chains.
 *
 * @category Validators
 */
export type IsLength<CallerT> = (a: number) => CallerT;

/**
 * Check whether current value is a string or array matching target length.
 * @param value
 * @param expectedLength
 * @returns
 *
 * @category Validators
 */
export function isLength(value: unknown[] | string, expectedLength: number): boolean {
	if (!Array.isArray(value) && typeof value !== 'number' && typeof value !== 'string') {
		return false;
	}

	if (typeof value === 'string') {
		return value.length === expectedLength;
	}

	if (typeof value === 'number') {
		return value === expectedLength;
	}

	return value.length === expectedLength;
}

/**
 * Factory to create isLength validator function used in rule chains.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory Functions
 */
export function isLengthMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): IsLength<CallerT> {
	return (expectedLength: number): CallerT => {
		const fn: RuleFn<unknown[] | string> = (curr: unknown[] | string): boolean => {
			return isLength(curr, expectedLength);
		};

		const node = new RuleNode('IS_LENGTH', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
