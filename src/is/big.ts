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

import Big from 'big.js';
import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';
import {typeMatch} from '../type/match';

/**
 * Type signature for IsBitInt validators used in rule chains.
 *
 * @category Validators
 */
export type IsBig<CallerT> = (value?: Big | number | null) => CallerT;

/**
 * Check if provided value is a valid Big.
 *
 * @param value		Number to check
 * @returns
 *
 * @category Validators
 */
export function isBig(target?: Big): boolean {
	return typeMatch(target, Big);
}

/**
 * Factory function to create isBig validator function.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory
 */
export function isBigMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): IsBig<CallerT> {
	return (): CallerT => {
		const fn: RuleFn<Big> = (value: Big): boolean => {
			return isBig(value);
		};

		const node = new RuleNode<Big>('IS_T_BIG', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
