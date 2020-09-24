import createMatchType, {KVPOpMatchType} from './type';
import createMatchTypes, {KVPOpMatchesTypes} from './types';

import KVPRule from './rule';
import KVPRuleNode from './node';
import KVPRuleNodeType from './node-type';

export default class KVPRuleAnd {
	public readonly type: KVPOpMatchType<KVPRuleAnd>;
	public readonly types: KVPOpMatchesTypes<KVPRuleAnd>;

	constructor(rule: KVPRule) {
		const node = new KVPRuleNode('AND', KVPRuleNodeType.OP, null);
		rule.add(node);
		this.type = createMatchType<KVPRuleAnd>(this, rule);
		this.types = createMatchTypes<KVPRuleAnd>(this, rule);
	}
}
