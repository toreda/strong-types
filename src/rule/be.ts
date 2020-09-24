import {KVPOpEqualTo} from './operator/equal-to';
import {KVPOpGreaterThan} from './operator/greater-than';
import {KVPOpIsNull} from './operator/null';
import {KVPOpIsUndefined} from './operator/undefined';
import {KVPOpLessThan} from './operator/less-than';
import KVPRule from './rule';
import KVPRuleChain from './chain';
import createEqualTo from './operator/equal-to';
import createGreaterThan from './operator/greater-than';
import createLessThan from './operator/less-than';
import createNullTest from './operator/null';
import createUndefinedTest from './operator/undefined';

export default class KVPRuleBe implements KVPRule {
	public readonly greaterThan: KVPOpGreaterThan<KVPRuleBe>;
	public readonly lessThan: KVPOpLessThan<KVPRuleBe>;
	public readonly equalTo: KVPOpEqualTo<KVPRuleBe>;
	public readonly ['undefined']: KVPOpIsUndefined<KVPRuleBe>;
	public readonly ['null']: KVPOpIsNull<KVPRuleBe>;

	constructor(chain: KVPRuleChain) {
		this.greaterThan = createGreaterThan<KVPRuleBe>(this, chain);
		this.lessThan = createLessThan<KVPRuleBe>(this, chain);
		this.equalTo = createEqualTo<KVPRuleBe>(this, chain);
		this['undefined'] = createUndefinedTest<KVPRuleBe>(this, chain);
		this['null'] = createNullTest<KVPRuleBe>(this, chain);
	}
}
