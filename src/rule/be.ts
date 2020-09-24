import {KVPOpBeUndefined} from './operator/be-undefined';
import {KVPOpEmpty} from './operator/empty';
import {KVPOpEqualTo} from './operator/equal-to';
import {KVPOpGreaterThan} from './operator/greater-than';
import {KVPOpIsNull} from './operator/null';
import {KVPOpLessThan} from './operator/less-than';
import KVPRule from './rule';
import createBeNull from './operator/be-null';
import createBeUndefined from './operator/be-undefined';
import createEmpty from './operator/empty';
import createEqualTo from './operator/equal-to';
import createGreaterThan from './operator/greater-than';
import createLessThan from './operator/less-than';

export default class KVPRuleBe {
	public readonly greaterThan: KVPOpGreaterThan<KVPRuleBe>;
	public readonly lessThan: KVPOpLessThan<KVPRuleBe>;
	public readonly equalTo: KVPOpEqualTo<KVPRuleBe>;
	public readonly ['undefined']: KVPOpIsUndefined<KVPRuleBe>;
	public readonly ['null']: KVPOpIsNull<KVPRuleBe>;
	public readonly empty: KVPOpEmpty<KVPRuleBe>;

	constructor(rule: KVPRule) {
		this.greaterThan = createGreaterThan<KVPRuleBe>(this, rule);
		this.lessThan = createLessThan<KVPRuleBe>(this, rule);
		this.equalTo = createEqualTo<KVPRuleBe>(this, rule);
		this.undefined = createBeUndefined<KVPRuleBe>(this, rule);
		this.null = createBeNull<KVPRuleBe>(this, rule);
		this.empty = createEmpty<KVPRuleBe>(this, rule);
	}
}
