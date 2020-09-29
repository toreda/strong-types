import {TBOpIsArray, makeIsArray} from '../validator/is-array';
import {TBOpIsBoolean, makeIsBoolean} from '../validator/is-boolean';
import {TBOpIsDouble, makeIsDouble} from '../validator/is-double';
import {TBOpIsInteger, makeIsInteger} from '../validator/is-integer';
import {TBOpIsNull, makeIsNull} from '../validator/is-null';
import {TBOpIsString, makeIsString} from '../validator/is-string';

import {TBRule} from '../rule/rule';
import {TBRuleModifiers} from '../rule/modifiers';

export class TBRuleType {
	public readonly integer: TBOpIsInteger<TBRuleType>;
	public readonly double: TBOpIsDouble<TBRuleType>;
	public readonly boolean: TBOpIsBoolean<TBRuleType>;
	public readonly array: TBOpIsArray<TBRuleType>;
	public readonly string: TBOpIsString<TBRuleType>;
	public readonly null: TBOpIsNull<TBRuleType>;

	constructor(rule: TBRule, mods: TBRuleModifiers) {
		this.array = makeIsArray<TBRuleType>(this, rule, mods);
		this.boolean = makeIsBoolean<TBRuleType>(this, rule, mods);
		this.double = makeIsDouble<TBRuleType>(this, rule, mods);
		this.integer = makeIsInteger<TBRuleType>(this, rule, mods);
		this.string = makeIsString<TBRuleType>(this, rule, mods);
		this.null = makeIsNull<TBRuleType>(this, rule, mods);
	}
}
