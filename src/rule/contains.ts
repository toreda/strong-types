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

import {HasChar, hasCharMake} from '../has/char';
import {HasCharTimes, hasCharTimesMake} from '../has/char/times';
import {HasText, hasTextMake} from '../has/text';
import {HasTextTimes, hasTextTimesMake} from '../has/text/times';

import {Rule} from '../rule';
import {RuleMods} from './mods';

/**
 * @category Rules
 */
export class RuleContains {
	public readonly text: HasText<RuleContains>;
	public readonly textTimes: HasTextTimes<RuleContains>;
	public readonly char: HasChar<RuleContains>;
	public readonly charTimes: HasCharTimes<RuleContains>;

	constructor(rule: Rule, mods: RuleMods) {
		this.text = hasTextMake<RuleContains>(this, rule, mods);
		this.textTimes = hasTextTimesMake<RuleContains>(this, rule, mods);

		this.char = hasCharMake<RuleContains>(this, rule, mods);
		this.charTimes = hasCharTimesMake<RuleContains>(this, rule, mods);
	}
}
