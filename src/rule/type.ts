import {IsArray, isArrayMake} from '../is/array';
import {IsBoolean, isBooleanMake} from '../is/boolean';
import {IsDouble, isDoubleMake} from '../is/double';
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
	public readonly boolean: IsBoolean<RuleType>;
	public readonly double: IsDouble<RuleType>;
	public readonly int: IsInt<RuleType>;
	public readonly null: IsNull<RuleType>;
	public readonly string: IsText<RuleType>;
	public readonly text: IsText<RuleType>;
	public readonly uint: IsUInt<RuleType>;

	constructor(rule: Rule, mods: RuleMods) {
		this.array = isArrayMake<RuleType>(this, rule, mods);
		this.boolean = isBooleanMake<RuleType>(this, rule, mods);
		this.double = isDoubleMake<RuleType>(this, rule, mods);
		this.int = isIntMake<RuleType>(this, rule, mods);
		this.null = isNullMake<RuleType>(this, rule, mods);
		this.string = isTextMake<RuleType>(this, rule, mods);
		this.text = isTextMake<RuleType>(this, rule, mods);
		this.uint = isUIntMake<RuleType>(this, rule, mods);
	}
}
