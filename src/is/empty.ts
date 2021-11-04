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
 * Type signature for isEmpty validators used in rule chains.
 *
 * @category Validators
 */
export type IsEmpty<CallerT> = (a: unknown) => CallerT;

/**
 * Determine if value is an empty array or empty string. Arrays & strings with
 * length > 0 and all other types return false.
 * @param value		Array or string to validate.
 * @returns			true	-	value is an empty string or empty array.
 *					false	-	value is either not a string, not an array,
 *								or not not empty.
 *
 * @category Validators
 */
export function isEmpty(value: unknown[] | string): boolean {
	if (!Array.isArray(value) && typeof value !== 'string') {
		return false;
	}

	if (typeof value === 'string') {
		return value === '';
	}

	return value.length === 0;
}

/**
 * Factory to create isEmpty validator function used in rule chains.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory Functions
 */
export function isEmptyMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): IsEmpty<CallerT> {
	return (): CallerT => {
		const fn: RuleFn<unknown[] | string> = (curr: unknown[] | string): boolean => {
			return isEmpty(curr);
		};

		const node = new RuleNode<string | unknown[]>('IS_EMPTY', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
