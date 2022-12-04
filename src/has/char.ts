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
import {hasText} from './text';

/**
 * Type signature for hasChar validators used in rule chains.
 *
 * @category Validators
 */
export type HasChar<CallerT> = (curr: string) => CallerT;

/**
 *
 * @param text
 * @param char
 * @returns
 *
 * @category Validators
 */
export function hasChar(text: string, char: string): boolean {
	if (typeof text !== 'string' || typeof char !== 'string') {
		return false;
	}

	if (text.length === 0 || char.length === 0) {
		return false;
	}

	if (char.length !== 1) {
		return false;
	}

	return hasText(text, char);
}

/**
 *
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory Functions
 */
export function hasCharMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): HasChar<CallerT> {
	return (target: string): CallerT => {
		const fn: RuleFn<string> = (curr: string) => {
			return hasChar(curr, target);
		};

		const node = new RuleNode<string>('HAS_CHAR', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
