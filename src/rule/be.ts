import {TBOpIsEmpty, createIsEmpty} from '../validator/empty';
import {TBOpIsEqualTo, createIsEqualTo} from '../validator/equal-to';
import {TBOpIsGreaterThan, createIsGreaterThan} from '../validator/greater-than';
import {
	TBOpIsGreaterThanOrEqualTo,
	createIsGreaterThanOrEqualTo
} from '../validator/greater-than-or-equal-to';
import {TBOpIsLessThan, createIsLessThan} from '../validator/less-than';
import {TBOpIsLessThanOrEqualTo, createIsLessThanOrEqualTo} from '../validator/less-than-or-equal-to';
import {TBOpIsNull, createIsNull} from '../validator/null';
import {TBOpIsUndefined, createIsUndefined} from '../validator/undefined';

import {TBRule} from './rule';
import {TBRuleModifiers} from '../rule/modifiers';

export class TBRuleBe {
	public readonly greaterThan: TBOpIsGreaterThan<TBRuleBe>;
	public readonly greaterThanOrEqualTo: TBOpIsGreaterThanOrEqualTo<TBRuleBe>;
	public readonly lessThanOrEqualTo: TBOpIsLessThanOrEqualTo<TBRuleBe>;
	public readonly lessThan: TBOpIsLessThan<TBRuleBe>;
	public readonly equalTo: TBOpIsEqualTo<TBRuleBe>;
	public readonly ['undefined']: TBOpIsUndefined<TBRuleBe>;
	public readonly ['null']: TBOpIsNull<TBRuleBe>;
	public readonly empty: TBOpIsEmpty<TBRuleBe>;

	constructor(rule: TBRule, mods: TBRuleModifiers) {
		this.greaterThan = createIsGreaterThan<TBRuleBe>(this, rule, mods);
		this.greaterThanOrEqualTo = createIsGreaterThanOrEqualTo<TBRuleBe>(this, rule, mods);
		this.lessThan = createIsLessThan<TBRuleBe>(this, rule, mods);
		this.lessThanOrEqualTo = createIsLessThanOrEqualTo<TBRuleBe>(this, rule, mods);
		this.equalTo = createIsEqualTo<TBRuleBe>(this, rule, mods);
		this.undefined = createIsUndefined<TBRuleBe>(this, rule, mods);
		this.null = createIsNull<TBRuleBe>(this, rule, mods);
		this.empty = createIsEmpty<TBRuleBe>(this, rule, mods);
	}
}
