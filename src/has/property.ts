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

import {BaseObject} from '../base/object';
import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

/**
 * Type signature for hasProperty validators used in rule chains.
 *
 * @category Validators
 */
export type HasProperty<CallerT> = (propName: string) => CallerT;

/**
 *
 * @param o
 * @param propName
 * @returns
 *
 * @category Validators
 */
export function hasProperty(o: unknown, propName: string): boolean {
	if (typeof o === 'undefined' || o === null) {
		return false;
	}

	const obj = o as BaseObject;
	return typeof obj[propName] !== 'undefined';
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
export function hasPropertyMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): HasProperty<CallerT> {
	return (propName: string): CallerT => {
		const fn: RuleFn<unknown> = (obj: unknown) => {
			return hasProperty(obj, propName);
		};

		const node = new RuleNode<unknown>('HAS_PROPERTY', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
