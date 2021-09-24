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
import {URL} from 'url';

/**
 * Type signature for isUrl validator functions used within rule chains.
 *
 * @category Validators
 */
export type IsUrl<CallerT> = () => CallerT;

/**
 * Check whether value is a valid URL.
 *
 * @category Validators
 */
export function isUrl(value: string): boolean {
	if (typeof value !== 'string') {
		return false;
	}

	const pieces = value.split('http://');
	const segment = value.split('https://');

	if (pieces[1] === '' || segment[1] === '') {
		return false;
	}

	let result = false;
	try {
		const url = new URL(value);
		result = true;
	} catch (e) {
		result = false;
	}

	return result;
}

/**
 * Factory to create isUrl validator function used in rule chains.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory
 */
export function isUrlMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): IsUrl<CallerT> {
	return (): CallerT => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isUrl(curr);
		};

		const node = new RuleNode<string>('IS_URL', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
