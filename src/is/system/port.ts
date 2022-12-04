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
import {isPort} from '../port';

/**
 * Type signature for isSystemPort validators used in rule chains.
 *
 * @category System Info Validators
 */
export type IsSystemPort<CallerT> = (value?: number) => CallerT;

/**
 * Check if provided value is a valid port system port number in the
 * range of 1 - 1024 which requires root/admin access to use.
 * @param value
 * @returns
 *
 * @category System Info Validators
 */
export function isSystemPort(value?: number): value is number {
	if (!isPort(value)) {
		return false;
	}

	return value < 1024;
}

/**
 * Factory to create isSystemPort validator function used in rule chains.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory Functions
 */
export function isSystemPortMake<CallerT>(
	caller: CallerT,
	rule: Rule,
	mods: RuleMods
): IsSystemPort<CallerT> {
	return (): CallerT => {
		const fn: RuleFn<number> = (curr: number): boolean => {
			return isSystemPort(curr);
		};

		const node = new RuleNode<number>('IS_SYS_PORT', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
