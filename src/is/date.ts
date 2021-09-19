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
 * Type signature for isDate validators used in rule chains.
 *
 * @category Validators
 */
export type IsDate<CallerType> = () => CallerType;

// eslint-disable-next-line
const timeStr = 'T([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]';
const timeStr1 = 'T([01]?[0-9]|2[0-3]):[0-5][0-9]';
const timeStr2 = 'T([01]?[0-9]|2[0-3])';

/**
 * Check if provided value is a valid Date string. Accepts most ISO
 * Date strings as valid.
 * @param value
 * @returns
 *
 * @category Validators
 */
function isDate(value: string): boolean {
	if (typeof value !== 'string') {
		return false;
	}

	const result = Date.parse(value);

	if (isNaN(result) || value.match(timeStr) || value.match(timeStr1) || value.match(timeStr2)) {
		return false;
	}

	return true;
}

/**
 * Factory function to create isDate validator function. Once created, the validator function can
 * be invoked with a value.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validators
 */
export function makeIsDate<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsDate<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isDate(curr);
		};

		const node = new RuleNode<string>('IS_DATE', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
