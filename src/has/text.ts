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
 * Type signature for hasText validators used in rule chains.
 *
 * @category Validators
 */
export type HasText<CallerT> = (target: string | string[]) => CallerT;

/**
 *
 * @param data
 * @param target
 * @returns
 *
 * @category Validators
 */
export function hasText(value: string, target: string | string[]): boolean {
	let mustMatch: string[];

	if (typeof value !== 'string' || value === '') {
		return false;
	}

	if (Array.isArray(target)) {
		mustMatch = target;
	} else if (typeof target === 'string') {
		mustMatch = [target];
	} else {
		mustMatch = [];
	}

	if (mustMatch.length === 0) {
		return false;
	}

	let matches = 0;

	for (const match of mustMatch) {
		if (value.indexOf(match) !== -1) {
			matches++;
		}
	}

	// All substrings in target must be present.
	return matches === mustMatch.length;
}

/**
 *
 * @param caller
 * @param data
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory
 */
export function hasTextMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): HasText<CallerT> {
	return (target: string | string[]): CallerT => {
		const fn: RuleFn<string> = (value: string) => {
			return hasText(value, target);
		};

		const node = new RuleNode<string>('HAS_TEXT', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
