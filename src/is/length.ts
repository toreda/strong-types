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

export type IsLength<CallerType> = (a: number) => CallerType;

export const isLengthFn = (curr: unknown[] | string, expectedLength: number): boolean => {
	if (!Array.isArray(curr) && typeof curr !== 'number' && typeof curr !== 'string') {
		return false;
	}

	if (typeof curr === 'string') {
		return curr.length === expectedLength;
	}

	if (typeof curr === 'number') {
		return curr === expectedLength;
	}

	return curr.length === expectedLength;
};

export function makeIsLength<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsLength<CallerType> {
	return (expectedLength: number): CallerType => {
		const fn: RuleFn<unknown[] | string> = (curr: unknown[] | string): boolean => {
			return isLengthFn(curr, expectedLength);
		};

		const node = new RuleNode('IS_LENGTH', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
