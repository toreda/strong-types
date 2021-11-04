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
 * Type signature for isNull validators used in rule chains.
 *
 * @category Validators
 */
export type IsNull<CallerT> = () => CallerT;

/**
 * Determine if value is strictly null.
 * @param value
 * @returns
 *
 * @category Validators
 */
export function isNull(value?: unknown | null): boolean {
	return value === null;
}

/**
 * Factory to create isNull validator function used in rule chains.
 * @param caller		Rule node calling this function.
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory Functions
 */
export function isNullMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): IsNull<CallerT> {
	return (): CallerT => {
		const fn: RuleFn<unknown | null> = (curr?: unknown | null): boolean => {
			return curr === null;
		};

		const node = new RuleNode<unknown | null>('IS_NULL', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
