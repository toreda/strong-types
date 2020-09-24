import createMatchType, {KVPOpMatchType} from './type';
import createMatchTypes, {KVPOpMatchesTypes} from './types';

import KVPRule from './rule';
import KVPRuleNode from './node';
import KVPRuleNodeType from './node-type';

export default class KVPRuleOr {
	public readonly type: KVPOpMatchType<KVPRuleOr>;
	public readonly types: KVPOpMatchesTypes<KVPRuleOr>;

	constructor(rule: KVPRule) {
		const node = new KVPRuleNode('OR', KVPRuleNodeType.OP, null);
		rule.add(node);
		this.type = createMatchType<KVPRuleOr>(this, rule);
		this.types = createMatchTypes<KVPRuleOr>(this, rule);
	}
}
