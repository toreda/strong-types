import {KVPOpIsDouble, createIsDouble} from './double';
import {KVPOpIsInteger, createIsInteger} from './integer';

import {KVPRule} from '../rule/rule';
import {KVPRuleModifiers} from '../rule/modifiers';

export class KVPRuleType {
	public readonly integer: KVPOpIsInteger<KVPRuleType>;
	public readonly double: KVPOpIsDouble<KVPRuleType>;

	constructor(rule: KVPRule, mods: KVPRuleModifiers) {
		this.integer = createIsInteger<KVPRuleType>(this, rule, mods);
		this.double = createIsDouble<KVPRuleType>(this, rule, mods);
	}
}
