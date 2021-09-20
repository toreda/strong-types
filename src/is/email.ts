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
 * Type signature for isEmail validators used in rule chains.
 *
 * @category Validators
 */
export type IsEmail<CallerType> = () => CallerType;

/**
 * Determine if provided value is a validly formatted email address.
 * @param value
 * @returns
 */
function isEmail(value: string): boolean {
	if (typeof value !== 'string') {
		return false;
	}

	if (!value.trim()) {
		return false;
	}

	const pieces = value.split('@');
	if (pieces.length !== 2) {
		return false;
	}

	const name = pieces[0];
	const domain = pieces[1];

	if (domain.indexOf('.') === -1) {
		return false;
	}

	if (domain.length > 252) {
		return false;
	}

	if (!name.trim()) {
		return false;
	}

	if (name.length > 64) {
		return false;
	}

	if (name.length + domain.length + 1 > 254) {
		return false;
	}

	return true;
}

/**
 * Factory to create isEmail validator function used in rule chains.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory
 */
export function makeIsEmail<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsEmail<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isEmail(curr);
		};

		const node = new RuleNode<string>('IS_EMAIL', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
