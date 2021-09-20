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
 * Type signature for isIpv4Addr validators used in rule chains.
 *
 * @category Validators
 */
export type IsIpv4Addr<CallerType> = () => CallerType;

export const isIpv4Addr = (curr: string): boolean => {
	//Always a string.
	if (typeof curr !== 'string') {
		return false;
	}
	//Is valid if it has whitespace which can be trimmed with .trim()
	//Invalid if it contains any other whitespace which cannot be trimmed with .trim()
	const trimmed = curr.trim();

	//Always has exactly four quads, and 3 periods.
	const pieces = trimmed.split('.');
	if (pieces.length !== 4) {
		return false;
	}

	const firstQuad = parseInt(pieces[0]);
	const secondQuad = parseInt(pieces[1]);
	const thirdQuad = parseInt(pieces[2]);
	const fourthQuad = parseInt(pieces[3]);

	//The first quad must be an integer between 1  and 255  (cannot be 0)
	//All other quads must be an integer between 0 and 255
	//Integers cannot have leading 0s
	if (firstQuad <= 0 || firstQuad > 255) {
		return false;
	}

	if (
		secondQuad < 0 ||
		secondQuad > 255 ||
		thirdQuad < 0 ||
		thirdQuad > 255 ||
		fourthQuad < 0 ||
		firstQuad > 255
	) {
		return false;
	}

	return true;
};

/**
 * Factory to create isIpv4Addr validator function used in rule chains.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory
 */
export function makeIsIpv4Addr<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsIpv4Addr<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isIpv4Addr(curr);
		};

		const node = new RuleNode('IS_IP4_ADDR', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
