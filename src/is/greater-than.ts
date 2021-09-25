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
 * Type signature for greaterThan validators used in rule chains.
 *
 * @category Validators
 */
export type IsGreaterThan<CallerT> = (target: number) => CallerT;

/**
 * Check if target number is strictly greater than value.
 * @param value
 * @param target
 * @returns
 *
 * @category Validators
 */
export function isGreaterThan(value: number, target: number): boolean {
	if (typeof value !== 'number' || typeof target !== 'number') {
		return false;
	}

	return value > target;
}

/**
 * Factory function to create an isGreaterThan validation function.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory
 */
export function isGreaterThanMake<CallerT>(
	caller: CallerT,
	rule: Rule,
	mods: RuleMods
): IsGreaterThan<CallerT> {
	return (target: number): CallerT => {
		const fn: RuleFn<number> = (curr: number) => {
			return isGreaterThan(curr, target);
		};

		const node = new RuleNode<number>('IS_GT', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
