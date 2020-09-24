import {KVPOpBeUndefined} from './operator/be-undefined';
import {KVPOpEmpty} from './operator/empty';
import {KVPOpEqualTo} from './operator/equal-to';
import {KVPOpGreaterThan} from './operator/greater-than';
import {KVPOpIsNull} from './operator/null';
import {KVPOpLessThan} from './operator/less-than';
import KVPRule from './rule';
import KVPRuleChain from './chain';
import createBeNull from './operator/be-null';
import createBeUndefined from './operator/be-undefined';
import createEmpty from './operator/empty';
import createEqualTo from './operator/equal-to';
import createGreaterThan from './operator/greater-than';
import createLessThan from './operator/less-than';

export default class KVPRuleBe implements KVPRule {
	public readonly greaterThan: KVPOpGreaterThan<KVPRuleBe>;
	public readonly lessThan: KVPOpLessThan<KVPRuleBe>;
	public readonly equalTo: KVPOpEqualTo<KVPRuleBe>;
	public readonly ['undefined']: KVPOpIsUndefined<KVPRuleBe>;
	public readonly ['null']: KVPOpIsNull<KVPRuleBe>;
	public readonly empty: KVPOpEmpty<KVPRuleBe>;

	constructor(chain: KVPRuleChain) {
		this.greaterThan = createGreaterThan<KVPRuleBe>(this, chain);
		this.lessThan = createLessThan<KVPRuleBe>(this, chain);
		this.equalTo = createEqualTo<KVPRuleBe>(this, chain);
		this.undefined = createBeUndefined<KVPRuleBe>(this, chain);
		this.null = createBeNull<KVPRuleBe>(this, chain);
		this.empty = createEmpty<KVPRuleBe>(this, chain);
	}
}
