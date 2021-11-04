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

import {BaseObject} from '../base/object';
import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

/**
 * Type signature for hasPropertyWithType validators used in rule chains.
 *
 * @category Validators
 */
export type HasPropertyWithType<CallerT> = (propName: string, typeName: string) => CallerT;

/**
 *
 * @param o
 * @param propName
 * @param typeName
 * @returns
 *
 * @category Validators
 */
export function hasPropertyWithType(o: unknown, propName: string, typeName: string): boolean {
	if (typeof propName !== 'string' || typeName !== 'string') {
		return false;
	}

	if (typeof o === 'undefined' || o === null) {
		return false;
	}

	if (!propName.trim() || !typeName.trim()) {
		return false;
	}

	const obj = o as BaseObject;

	if (typeof obj.hasOwnProperty !== 'function' || !obj.hasOwnProperty(propName)) {
		return false;
	}

	return typeof obj[propName] === typeName;
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
export function hasPropertyWithTypeMake<CallerT>(
	caller: CallerT,
	rule: Rule,
	mods: RuleMods
): HasPropertyWithType<CallerT> {
	return (propName, typeName): CallerT => {
		const fn: RuleFn<unknown> = (obj: unknown): boolean => {
			return hasPropertyWithType(obj, propName, typeName);
		};

		const node = new RuleNode<unknown>('HAS_PROP_W_TYPE', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
