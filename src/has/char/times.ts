/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2022 Toreda, Inc.
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

import {Rule} from '../../rule';
import {RuleFn} from '../../rule/fn';
import {RuleMods} from '../../rule/mods';
import {RuleNode} from '../../rule/node';
import {RuleNodeType} from '../../rule/node/type';

/**
 * Type signature for hasCharTimes validators used in rule chains.
 *
 * @category Validators
 */
export type HasCharTimes<CallerT> = (curr: string, count: number) => CallerT;

/**
 *
 * @param text
 * @param char
 * @param count
 * @returns
 *
 * @category Validators
 */
export function hasCharTimes(text: string, targetChar: string, count: number): boolean {
	if (typeof text !== 'string' || typeof targetChar !== 'string') {
		return false;
	}

	if (!text.length || !targetChar.length) {
		return false;
	}

	if (targetChar.length !== 1) {
		return false;
	}

	if (count < 0) {
		return false;
	}

	let findCount = 0;
	// O(n) search for matching characters. Doesn't work for greater
	for (const char of text) {
		if (char === targetChar) {
			findCount++;
		}
	}

	return findCount >= count;
}

/**
 *
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory Functions
 */
export function hasCharTimesMake<CallerT>(
	caller: CallerT,
	rule: Rule,
	mods: RuleMods
): HasCharTimes<CallerT> {
	return (char: string, count: number): CallerT => {
		const fn: RuleFn<string> = (curr: string) => {
			return hasCharTimes(curr, char, count);
		};

		const node = new RuleNode<string>('HAS_CHAR_TIMES', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
