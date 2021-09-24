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
 * Type signature for isUInt validators used in rule chains.
 *
 * @category Validators
 */
export type IsUInt<CallerT> = (value?: number) => CallerT;

/**
 * Check whether provided value is a valid number, and if so
 * whether it's an unsigned integer.
 * @param value		Number to check
 * @returns
 *
 * @category Validators
 */
export function isUInt(value?: number): boolean {
	if (typeof value !== 'number') {
		return false;
	}

	if (isNaN(value)) {
		return false;
	}

	if (value < 0) {
		return false;
	}
	return Math.floor(value) === value;
}

/**
 * Factory function to create isInteger validator function.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory
 */
export function isUIntMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): IsUInt<CallerT> {
	return (): CallerT => {
		const fn: RuleFn<number> = (value: number): boolean => {
			return isUInt(value);
		};

		const node = new RuleNode<number>('IS_U_INT', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
