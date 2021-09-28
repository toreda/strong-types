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
