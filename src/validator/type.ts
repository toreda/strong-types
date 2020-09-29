import {TBOpIsArray, createIsArray} from './array';
import {TBOpIsBoolean, createIsBoolean} from './boolean';
import {TBOpIsDouble, createIsDouble} from './double';
import {TBOpIsInteger, createIsInteger} from './integer';

import {TBRule} from '../rule/rule';
import {TBRuleModifiers} from '../rule/modifiers';

export class TBRuleType {
	public readonly integer: TBOpIsInteger<TBRuleType>;
	public readonly double: TBOpIsDouble<TBRuleType>;
	public readonly boolean: TBOpIsBoolean<TBRuleType>;
	public readonly array: TBOpIsArray<TBRuleType>;

	constructor(rule: TBRule, mods: TBRuleModifiers) {
		this.integer = createIsInteger<TBRuleType>(this, rule, mods);
		this.double = createIsDouble<TBRuleType>(this, rule, mods);
		this.boolean = createIsBoolean<TBRuleType>(this, rule, mods);
		this.array = createIsArray<TBRuleType>(this, rule, mods);
	}
}
