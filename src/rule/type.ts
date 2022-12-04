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

import {IsArray, isArrayMake} from '../is/array';
import {IsBig, isBigMake} from '../is/big';
import {IsBigInt, isBigIntMake} from '../is/big-int';
import {IsBoolean, isBooleanMake} from '../is/boolean';
import {IsDbl, isDblMake} from '../is/dbl';
import {IsFloat, isFloatMake} from '../is/float';
import {IsInt, isIntMake} from '../is/int';
import {IsNull, isNullMake} from '../is/null';
import {IsText, isTextMake} from '../is/text';
import {IsUInt, isUIntMake} from '../is/uint';

import {Rule} from '../rule';
import {RuleMods} from './mods';

/**
 * @category Rules
 */
export class RuleType {
	public readonly array: IsArray<RuleType>;
	public readonly big: IsBig<RuleType>;
	public readonly bigInt: IsBigInt<RuleType>;
	public readonly boolean: IsBoolean<RuleType>;
	public readonly dbl: IsDbl<RuleType>;
	public readonly float: IsFloat<RuleType>;
	public readonly int: IsInt<RuleType>;
	public readonly null: IsNull<RuleType>;
	public readonly string: IsText<RuleType>;
	public readonly text: IsText<RuleType>;
	public readonly uint: IsUInt<RuleType>;

	constructor(rule: Rule, mods: RuleMods) {
		this.array = isArrayMake<RuleType>(this, rule, mods);
		this.big = isBigMake<RuleType>(this, rule, mods);
		this.bigInt = isBigIntMake<RuleType>(this, rule, mods);
		this.boolean = isBooleanMake<RuleType>(this, rule, mods);
		this.dbl = isDblMake<RuleType>(this, rule, mods);
		this.float = isFloatMake<RuleType>(this, rule, mods);
		this.int = isIntMake<RuleType>(this, rule, mods);
		this.null = isNullMake<RuleType>(this, rule, mods);
		this.string = isTextMake<RuleType>(this, rule, mods);
		this.text = isTextMake<RuleType>(this, rule, mods);
		this.uint = isUIntMake<RuleType>(this, rule, mods);
	}
}
