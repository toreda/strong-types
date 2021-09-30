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

import {HasLengthEqual, hasLengthEqualMake} from '../has/length-equal';
import {HasLengthGT, hasLengthGTMake} from '../has/length/gt';
import {HasLengthGTE, hasLengthGTEMake} from '../has/length/gte';
import {HasLengthLT, hasLengthLTMake} from '../has/length/lt';
import {HasLengthLTE, hasLengthLTEMake} from '../has/length/lte';

import {Rule} from '../rule';
import {RuleMods} from '../rule/mods';

/**
 * @category Rules
 */
export class RuleLength {
	public readonly equalTo: HasLengthEqual<RuleLength>;
	public readonly greaterThan: HasLengthGT<RuleLength>;
	public readonly greaterThanOrEqualTo: HasLengthGTE<RuleLength>;
	public readonly lessThan: HasLengthLT<RuleLength>;
	public readonly lessThanOrEqualTo: HasLengthLTE<RuleLength>;

	constructor(rule: Rule, mods: RuleMods) {
		this.equalTo = hasLengthEqualMake<RuleLength>(this, rule, mods);
		this.greaterThan = hasLengthGTMake<RuleLength>(this, rule, mods);
		this.greaterThanOrEqualTo = hasLengthGTEMake<RuleLength>(this, rule, mods);
		this.lessThan = hasLengthLTMake<RuleLength>(this, rule, mods);
		this.lessThanOrEqualTo = hasLengthLTEMake<RuleLength>(this, rule, mods);
	}
}
