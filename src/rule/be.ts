import KVPOpEqualTo, {createEqualTo} from './operator/equal-to';
import KVPOpGreaterThan, {createGreaterThan} from './operator/greater-than';
import KVPOpGreaterThanOrEqualTo, {
	createGreaterThanOrEqualTo
} from './operator/greater-than-or-equal-to';
import KVPOpIsEmpty, {createIsEmpty} from './operator/empty';
import KVPOpIsNull, {createIsNull} from './operator/null';
import KVPOpIsUndefined, {createIsUndefined} from './operator/undefined';
import KVPOpLessThan, {createLessThan} from './operator/less-than';
import KVPOpLessThanOrEqualTo, {createLessThanOrEqualTo} from './operator/less-than-or-equal-to';

import KVPRule from './rule';
import KVPRuleModifiers from '../rule/modifiers';

export default class KVPRuleBe {
	public readonly greaterThan: KVPOpGreaterThan<KVPRuleBe>;
	public readonly greaterThanOrEqualTo: KVPOpGreaterThanOrEqualTo<KVPRuleBe>;
	public readonly lessThanOrEqualTo: KVPOpLessThanOrEqualTo<KVPRuleBe>;
	public readonly lessThan: KVPOpLessThan<KVPRuleBe>;
	public readonly equalTo: KVPOpEqualTo<KVPRuleBe>;
	public readonly ['undefined']: KVPOpIsUndefined<KVPRuleBe>;
	public readonly ['null']: KVPOpIsNull<KVPRuleBe>;
	public readonly empty: KVPOpIsEmpty<KVPRuleBe>;

	constructor(rule: KVPRule, mods: KVPRuleModifiers) {
		this.greaterThan = createGreaterThan<KVPRuleBe>(this, rule, mods);
		this.greaterThanOrEqualTo = createGreaterThanOrEqualTo<KVPRuleBe>(this, rule, mods);
		this.lessThan = createLessThan<KVPRuleBe>(this, rule, mods);
		this.lessThanOrEqualTo = createLessThanOrEqualTo<KVPRuleBe>(this, rule, mods);
		this.equalTo = createEqualTo<KVPRuleBe>(this, rule, mods);
		this.undefined = createIsUndefined<KVPRuleBe>(this, rule, mods);
		this.null = createIsNull<KVPRuleBe>(this, rule, mods);
		this.empty = createIsEmpty<KVPRuleBe>(this, rule, mods);
	}
}
