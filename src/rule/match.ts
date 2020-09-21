import createMatchType, {KVPOpMatchType} from './type';
import createMatchTypes, {KVPOpMatchesTypes} from './types';

import KVPRuleChain from './rule-chain';
import KVPRuleNode from './rule-node';
import KVPRuleOr from './or';
import KVPRuleStatement from './statement';
import KVPRuleType from './type';

export default class KVPRuleMatch implements KVPRuleNode {
	public readonly or: KVPRuleOr;
	public readonly type: KVPOpMatchType<KVPRuleMatch>;
	public readonly types: KVPOpMatchesTypes<KVPRuleMatch>;

	constructor(chain: KVPRuleChain) {
		this.or = new KVPRuleOr(chain);
		this.type = createMatchType<KVPRuleMatch>(this, chain);
		this.types = createMatchTypes<KVPRuleMatch>(this, chain);
	}
}
