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
import {isInteger} from './integer';

/**
 * Type signature for isPort validators used in rule chains.
 *
 * @category Validators
 */
export type IsPort<CallerType> = () => CallerType;

/**
 * Check if provided value is a valid port number. Does not differentiate
 * between reserved system ports (root only)and non-reserved ports, only that
 * the port is in the valid port range.
 * @param value
 * @returns
 *
 * @category Validators
 */
export const isPort = (value: number): boolean => {
	if (typeof value !== 'number') {
		return false;
	}

	if (value < 0) {
		return false;
	}

	if (value > 65353) {
		return false;
	}

	return isInteger(value);
};

//Must be an unsigned int (whole number).
//Must be from 0 to 65353 .
//port > 65353 is invalid.
//port < 0 is invalid.

/**
 *
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validators
 */
export function makeIsPort<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsPort<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<number> = (curr: number): boolean => {
			return isPort(curr);
		};

		const node = new RuleNode<number>('IS_PORT', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
