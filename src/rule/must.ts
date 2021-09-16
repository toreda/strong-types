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

import {IsEqual, makeIsEqual} from '../is/equal';

import {Rule} from '../rule';
import {RuleBe} from './be';
import {RuleHave} from './have';
import {RuleMatch} from './match';
import {RuleMods} from './mods';
import {RuleNot} from './not';

export class RuleMust {
	public readonly be: RuleBe;
	public readonly have: RuleHave;
	public readonly not: RuleNot;
	public readonly equal: IsEqual<RuleMust>;
	public readonly match: RuleMatch;

	constructor(rules: Rule[], parentRule: Rule | null) {
		const rule = parentRule ? parentRule : new Rule();
		if (!parentRule) {
			rules.push(rule);
		}

		const mods: RuleMods = {
			invert: false
		};

		this.be = new RuleBe(rule, mods);
		this.have = new RuleHave(rule, mods);
		this.not = new RuleNot(rule, mods);
		this.equal = makeIsEqual<RuleMust>(this, rule, mods);
		this.match = new RuleMatch(rule, mods);
	}
}
