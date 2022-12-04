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

import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

/**
 * Type signature for lessThanOrEqual validators used in rule chains.
 *
 * @category Validators
 */
export type IsLTE<CallerT> = (a: number) => CallerT;

/**
 * Check whether target number is less than or equal to current value.
 * @param value		Strong Type's current value.
 * @param target	Target number to compare.
 * @returns
 *
 * @category Validators
 */
export function isLTE(value: number, target: number): boolean {
	if (typeof value !== 'number' || typeof target !== 'number') {
		return false;
	}

	return value <= target;
}

/**
 * Factory to create a isLTE validator function.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory Functions
 */
export function isLTEMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): IsLTE<CallerT> {
	return (target: number): CallerT => {
		const ruleFn: RuleFn<number> = (curr: number) => {
			return isLTE(curr, target);
		};

		const node = new RuleNode('IS_LT_OR_EQT', RuleNodeType.CMP, ruleFn, mods);
		rule.add(node);

		return caller;
	};
}
