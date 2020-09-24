import KVPOpEqualTo, {createEqualTo} from './operator/equal-to';
import KVPOpGreaterThan, {createGreaterThan} from './operator/greater-than';
import KVPOpIsEmpty, {createIsEmpty} from './operator/empty';
import KVPOpIsNull, {createIsNull} from './operator/null';
import KVPOpIsUndefined, {createIsUndefined} from './operator/undefined';

import {KVPOpLessThan} from './operator/less-than';
import KVPRule from './rule';
import createLessThan from './operator/less-than';

export default class KVPRuleBe {
	public readonly greaterThan: KVPOpGreaterThan<KVPRuleBe>;
	public readonly lessThan: KVPOpLessThan<KVPRuleBe>;
	public readonly equalTo: KVPOpEqualTo<KVPRuleBe>;
	public readonly ['undefined']: KVPOpIsUndefined<KVPRuleBe>;
	public readonly ['null']: KVPOpIsNull<KVPRuleBe>;
	public readonly empty: KVPOpIsEmpty<KVPRuleBe>;

	constructor(rule: KVPRule) {
		this.greaterThan = createGreaterThan<KVPRuleBe>(this, rule);
		this.lessThan = createLessThan<KVPRuleBe>(this, rule);
		this.equalTo = createEqualTo<KVPRuleBe>(this, rule);
		this.undefined = createIsUndefined<KVPRuleBe>(this, rule);
		this.null = createIsNull<KVPRuleBe>(this, rule);
		this.empty = createIsEmpty<KVPRuleBe>(this, rule);
	}
}
