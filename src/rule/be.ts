import {KVPOpIsEmpty, createIsEmpty} from '../validator/empty';
import {KVPOpIsEqualTo, createIsEqualTo} from '../validator/equal-to';
import {KVPOpIsGreaterThan, createIsGreaterThan} from '../validator/greater-than';
import {
	KVPOpIsGreaterThanOrEqualTo,
	createIsGreaterThanOrEqualTo
} from '../validator/greater-than-or-equal-to';
import {KVPOpIsLessThan, createIsLessThan} from '../validator/less-than';
import {KVPOpIsLessThanOrEqualTo, createIsLessThanOrEqualTo} from '../validator/less-than-or-equal-to';
import {KVPOpIsNull, createIsNull} from '../validator/null';
import {KVPOpIsUndefined, createIsUndefined} from '../validator/undefined';

import {KVPRule} from './rule';
import {KVPRuleModifiers} from '../rule/modifiers';

export class KVPRuleBe {
	public readonly greaterThan: KVPOpIsGreaterThan<KVPRuleBe>;
	public readonly greaterThanOrEqualTo: KVPOpIsGreaterThanOrEqualTo<KVPRuleBe>;
	public readonly lessThanOrEqualTo: KVPOpIsLessThanOrEqualTo<KVPRuleBe>;
	public readonly lessThan: KVPOpIsLessThan<KVPRuleBe>;
	public readonly equalTo: KVPOpIsEqualTo<KVPRuleBe>;
	public readonly ['undefined']: KVPOpIsUndefined<KVPRuleBe>;
	public readonly ['null']: KVPOpIsNull<KVPRuleBe>;
	public readonly empty: KVPOpIsEmpty<KVPRuleBe>;

	constructor(rule: KVPRule, mods: KVPRuleModifiers) {
		this.greaterThan = createIsGreaterThan<KVPRuleBe>(this, rule, mods);
		this.greaterThanOrEqualTo = createIsGreaterThanOrEqualTo<KVPRuleBe>(this, rule, mods);
		this.lessThan = createIsLessThan<KVPRuleBe>(this, rule, mods);
		this.lessThanOrEqualTo = createIsLessThanOrEqualTo<KVPRuleBe>(this, rule, mods);
		this.equalTo = createIsEqualTo<KVPRuleBe>(this, rule, mods);
		this.undefined = createIsUndefined<KVPRuleBe>(this, rule, mods);
		this.null = createIsNull<KVPRuleBe>(this, rule, mods);
		this.empty = createIsEmpty<KVPRuleBe>(this, rule, mods);
	}
}
