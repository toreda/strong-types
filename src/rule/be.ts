import {KVPOpEqualTo, createEqualTo} from '../validator/equal-to';
import {KVPOpGreaterThan, createGreaterThan} from '../validator/greater-than';
import {
	KVPOpGreaterThanOrEqualTo,
	createGreaterThanOrEqualTo
} from '../validator/greater-than-or-equal-to';
import {KVPOpIsEmpty, createIsEmpty} from '../validator/empty';
import {KVPOpIsNull, createIsNull} from '../validator/null';
import {KVPOpIsUndefined, createIsUndefined} from '../validator/undefined';
import {KVPOpLessThan, createLessThan} from '../validator/less-than';
import {KVPOpLessThanOrEqualTo, createLessThanOrEqualTo} from '../validator/less-than-or-equal-to';

import {KVPRule} from './rule';
import {KVPRuleModifiers} from '../rule/modifiers';

export class KVPRuleBe {
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
