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

import {RuleFn} from './fn';
import {RuleMods} from '../rule/mods';
import {RuleNodeTarget} from './node/target';
import {RuleNodeType} from '../rule/node/type';

/**
 * @category Rules
 */
export class RuleNode<T> {
	public readonly id: string;
	public readonly children: RuleNode<unknown>[];
	public readonly fn: RuleFn<T>;
	public readonly type: RuleNodeType;
	public target: RuleNodeTarget;
	public invertResult: boolean;

	constructor(id: string, type: RuleNodeType, fn: RuleFn<T>, mods: RuleMods) {
		this.id = id;

		if (typeof fn !== 'function') {
			throw new Error(`Bad rule init - fn arg is not a function.`);
		}

		this.type = type;
		this.children = [];
		this.fn = fn;
		this.target = mods.target;
		this.invertResult = mods.invert === true ? true : false;
	}

	public execute(value: T): boolean {
		const result = this.fn(value);

		if (!this.invertResult) {
			return result;
		} else {
			return !result;
		}
	}
}
