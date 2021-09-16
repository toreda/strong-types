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

export type IsEqual<CallerType> = (a: unknown) => CallerType;

export const equalToFn = (curr: unknown, target: unknown): boolean => {
	if (typeof target === 'undefined' || typeof curr === 'undefined') {
		return false;
	}

	if (Array.isArray(curr) && Array.isArray(target)) {
		if (curr.length !== target.length) {
			return false;
		}

		// Naive check for equality. Will produce false negative
		// if the arrays have the same contents in a different order.
		for (let i = 0; i < curr.length; i++) {
			if (curr[i] !== target[i]) {
				return false;
			}
		}

		return true;
	}

	return curr === target;
};

export function makeIsEqual<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsEqual<CallerType> {
	return (target: unknown): CallerType => {
		const fn: RuleFn<unknown> = (curr: unknown): boolean => {
			return equalToFn(curr, target);
		};
		const node = new RuleNode('IS_EQ', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);
		return caller;
	};
}
