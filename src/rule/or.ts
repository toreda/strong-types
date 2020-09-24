import createMatchType, {KVPOpMatchType} from './type';
import createMatchTypes, {KVPOpMatchesTypes} from './types';

import KVPRuleChain from './chain';

export default class KVPRuleOr {
	public readonly type: KVPOpMatchType<KVPRuleOr>;
	public readonly types: KVPOpMatchesTypes<KVPRuleOr>;

	constructor(chain: KVPRuleChain) {
		this.type = createMatchType<KVPRuleOr>(this, chain);
		this.types = createMatchTypes<KVPRuleOr>(this, chain);
	}
}
