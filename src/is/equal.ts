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
 * Type signature for isEqual validators used in rule chains.
 *
 * @category Validators
 */
export type IsEqual<CallerT> = (target: unknown) => CallerT;

/**
 *
 * @param curr
 * @param target
 * @returns
 *
 * @category Validators
 */
export function isEqual(value: unknown, target: unknown): boolean {
	if (typeof target === 'undefined' || typeof value === 'undefined') {
		return false;
	}

	if (Array.isArray(value) && Array.isArray(target)) {
		if (value.length !== target.length) {
			return false;
		}

		// Naive check for equality. Will produce false negative
		// if the arrays have the same contents in a different order.
		for (let i = 0; i < value.length; i++) {
			if (value[i] !== target[i]) {
				return false;
			}
		}

		return true;
	}

	return value === target;
}

/**
 * Factory to create isEqual validator function used in rule chains.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory
 */
export function isEqualMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): IsEqual<CallerT> {
	return (target: unknown): CallerT => {
		const fn: RuleFn<unknown> = (value: unknown): boolean => {
			return isEqual(value, target);
		};
		const node = new RuleNode('IS_EQ', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);
		return caller;
	};
}
