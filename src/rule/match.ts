import createMatchFormat, {KVPOpMatchFormat} from './format';
import createMatchFormats, {KVPOpMatchFormats} from './formats';
import createMatchType, {KVPOpMatchType} from './type';
import createMatchTypes, {KVPOpMatchesTypes} from './types';

import KVPRule from './rule';
import KVPRuleChain from './chain';
import KVPRuleOr from './or';

export default class KVPRuleMatch implements KVPRule {
	public readonly or: KVPRuleOr;
	public readonly type: KVPOpMatchType<KVPRuleMatch>;
	public readonly types: KVPOpMatchesTypes<KVPRuleMatch>;
	public readonly format: KVPOpMatchFormat<KVPRuleMatch>;
	public readonly formats: KVPOpMatchFormats<KVPRuleMatch>;

	constructor(chain: KVPRuleChain) {
		this.or = new KVPRuleOr(chain);
		this.type = createMatchType<KVPRuleMatch>(this, chain);
		this.types = createMatchTypes<KVPRuleMatch>(this, chain);
		this.format = createMatchFormat<KVPRuleMatch>(this, chain);
		this.formats = createMatchFormats<KVPRuleMatch>(this, chain);
	}
}
