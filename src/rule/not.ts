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

import {IsEqual, isEqualMake} from '../is/equal';

import {Rule} from '../rule';
import {RuleBe} from './be';
import {RuleContains} from './contains';
import {RuleMods} from './mods';

/**
 * Inverts the operation immediately following it.
 *
 * @category Rules
 */
export class RuleNot {
	public readonly be: RuleBe;
	public readonly equalTo: IsEqual<RuleNot>;
	public readonly contain: RuleContains;

	constructor(rule: Rule, parentMods: RuleMods) {
		const mods: RuleMods = {
			invert: !parentMods.invert,
			target: parentMods.target
		};

		this.be = new RuleBe(rule, mods);
		this.contain = new RuleContains(rule, mods);
		this.equalTo = isEqualMake<RuleNot>(this, rule, mods);
	}
}
