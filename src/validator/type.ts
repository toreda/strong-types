import KVPOpIsInteger, {createIsInteger} from './integer';

import KVPRule from '../rule/rule';
import KVPRuleModifiers from '../rule/modifiers';

export default class KVPRuleType {
	public readonly integer: KVPOpIsInteger<KVPRuleType>;

	constructor(rule: KVPRule, mods: KVPRuleModifiers) {
		this.integer = createIsInteger<KVPRuleType>(this, rule, mods);
	}
}
