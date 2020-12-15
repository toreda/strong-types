import {STOpIsArray, makeIsArray} from '../validator/is-array';
import {STOpIsBoolean, makeIsBoolean} from '../validator/is-boolean';
import {STOpIsDate, makeIsDate} from '../validator/is-date';
import {STOpIsDouble, makeIsDouble} from '../validator/is-double';
import {STOpIsInteger, makeIsInteger} from '../validator/is-integer';
import {STOpIsNull, makeIsNull} from '../validator/is-null';
import {STOpIsString, makeIsString} from '../validator/is-string';
import {STOpIsTime, makeIsTime} from '../validator/is-time';

import {STRule} from '../rule/rule';
import {STRuleModifiers} from '../rule/modifiers';

export class STRuleType {
	public readonly integer: STOpIsInteger<STRuleType>;
	public readonly double: STOpIsDouble<STRuleType>;
	public readonly boolean: STOpIsBoolean<STRuleType>;
	public readonly array: STOpIsArray<STRuleType>;
	public readonly string: STOpIsString<STRuleType>;
	public readonly null: STOpIsNull<STRuleType>;
	public readonly date: STOpIsDate<STRuleType>;
	public readonly time: STOpIsTime<STRuleType>;

	constructor(rule: STRule, mods: STRuleModifiers) {
		this.array = makeIsArray<STRuleType>(this, rule, mods);
		this.boolean = makeIsBoolean<STRuleType>(this, rule, mods);
		this.double = makeIsDouble<STRuleType>(this, rule, mods);
		this.integer = makeIsInteger<STRuleType>(this, rule, mods);
		this.string = makeIsString<STRuleType>(this, rule, mods);
		this.null = makeIsNull<STRuleType>(this, rule, mods);
		this.date = makeIsDate<STRuleType>(this, rule, mods);
		this.time = makeIsTime<STRuleType>(this, rule, mods);
	}
}
