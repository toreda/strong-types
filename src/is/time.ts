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
 * Type signature for isTime validators used in rule chains.
 *
 * @category Date & Time Validators
 */
export type IsTime<CallerT> = () => CallerT;

const maxTime = '^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$';
const minTime = '^([01]?[0-9]|2[0-3]):[0-5][0-9]$';
// prettier-ignore
// eslint-disable-next-line
const dateTimeStr = '^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$';
// prettier-ignore
const dateStr = '^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$';

/**
 * Check whether `value` is a valid time string.
 * @param value
 * @returns
 *
 * @category Date & Time Validators
 */
export function isTime(value: string): boolean {
	if (typeof value !== 'string' || value.match(dateTimeStr) || value.match(dateStr)) {
		return false;
	}

	if (typeof value === 'string') {
		if (value.match(maxTime) || value.match(minTime)) {
			return true;
		}
		return false;
	}

	return true;
}

/**
 * Factory to create isTime validator function used in rule chains.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Date & Time Validators
 */
export function isTimeMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): IsTime<CallerT> {
	return (): CallerT => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isTime(curr);
		};

		const node = new RuleNode<string>('IS_TIME', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
