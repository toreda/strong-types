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
 * Type signature for hasTextTimes validators used in rule chains.
 *
 * @category Validators
 */
export type HasTextTimes<CallerType> = (curr: string, count: number) => CallerType;

/**
 *
 * @param curr
 * @param target
 * @param count
 * @returns
 *
 * @category Validators
 */
export const hasTextTimes = (curr: string, target: string, count: number): boolean => {
	if (typeof curr !== 'string') {
		return false;
	}

	if (typeof target !== 'string') {
		return false;
	}

	return curr.includes(target);
};

/**
 *
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validators
 */
export function makeHasTextTimes<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): HasTextTimes<CallerType> {
	return (target: string, count: number): CallerType => {
		const fn: RuleFn<string> = (curr: string) => {
			return hasTextTimes(curr, target, count);
		};

		const node = new RuleNode<string>('HAS_TEXT_TIMES', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
