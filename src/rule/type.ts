import {IsArray, makeIsArray} from '../is/array';
import {IsBoolean, makeIsBoolean} from '../is/boolean';
import {IsDouble, makeIsDouble} from '../is/double';
import {IsInteger, makeIsInteger} from '../is/integer';
import {IsNull, makeIsNull} from '../is/null';
import {IsString, makeIsString} from '../is/string';

import {Rule} from '../rule';
import {RuleMods} from './mods';

export class RuleType {
	public readonly integer: IsInteger<RuleType>;
	public readonly double: IsDouble<RuleType>;
	public readonly boolean: IsBoolean<RuleType>;
	public readonly array: IsArray<RuleType>;
	public readonly string: IsString<RuleType>;
	public readonly null: IsNull<RuleType>;

	constructor(rule: Rule, mods: RuleMods) {
		this.array = makeIsArray<RuleType>(this, rule, mods);
		this.boolean = makeIsBoolean<RuleType>(this, rule, mods);
		this.double = makeIsDouble<RuleType>(this, rule, mods);
		this.integer = makeIsInteger<RuleType>(this, rule, mods);
		this.string = makeIsString<RuleType>(this, rule, mods);
		this.null = makeIsNull<RuleType>(this, rule, mods);
	}
}
