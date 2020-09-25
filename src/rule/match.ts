import createMatchFormat, {KVPOpMatchFormat} from './format';
import createMatchFormats, {KVPOpMatchFormats} from './formats';

import KVPRule from './rule';
import KVPRuleOr from './or';
import KVPRuleType from './operator/type';

export default class KVPRuleMatch {
	public readonly or: KVPRuleOr;
	public readonly type: KVPRuleType;
	public readonly format: KVPOpMatchFormat<KVPRuleMatch>;
	public readonly formats: KVPOpMatchFormats<KVPRuleMatch>;

	constructor(rule: KVPRule) {
		this.or = new KVPRuleOr(rule);
		this.type = new KVPRuleType(rule);
		this.format = createMatchFormat<KVPRuleMatch>(this, rule);
		this.formats = createMatchFormats<KVPRuleMatch>(this, rule);
	}
}
