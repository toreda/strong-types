import createMatchFormat, {KVPOpMatchFormat} from './format';
import createMatchFormats, {KVPOpMatchFormats} from './formats';
import createMatchType, {KVPOpMatchType} from './type';
import createMatchTypes, {KVPOpMatchesTypes} from './types';

import KVPRule from './rule';
import KVPRuleOr from './or';

export default class KVPRuleMatch {
	public readonly or: KVPRuleOr;
	public readonly type: KVPOpMatchType<KVPRuleMatch>;
	public readonly types: KVPOpMatchesTypes<KVPRuleMatch>;
	public readonly format: KVPOpMatchFormat<KVPRuleMatch>;
	public readonly formats: KVPOpMatchFormats<KVPRuleMatch>;

	constructor(rule: KVPRule) {
		this.or = new KVPRuleOr(rule);
		this.type = createMatchType<KVPRuleMatch>(this, rule);
		this.types = createMatchTypes<KVPRuleMatch>(this, rule);
		this.format = createMatchFormat<KVPRuleMatch>(this, rule);
		this.formats = createMatchFormats<KVPRuleMatch>(this, rule);
	}
}
