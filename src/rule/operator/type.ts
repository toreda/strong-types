import KVPOpIsInteger, {createIsInteger} from './integer';

import KVPRule from '../rule';

export default class KVPRuleType {
	public readonly integer: KVPOpIsInteger<KVPRuleType>;

	constructor(rule: KVPRule) {
		this.integer = createIsInteger<KVPRuleType>(this, rule);
	}
}
