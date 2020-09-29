import {TBOpIsEmpty, makeIsEmpty} from '../validator/is-empty';
import {TBOpIsEqualTo, makeIsEqualTo} from '../validator/is-equal-to';
import {TBOpIsGreaterThan, makeIsGreaterThan} from '../validator/is-greater-than';
import {
	TBOpIsGreaterThanOrEqualTo,
	makeIsGreaterThanOrEqualTo
} from '../validator/is-greater-than-or-equal-to';
import {TBOpIsLessThan, makeIsLessThan} from '../validator/is-less-than';
import {TBOpIsLessThanOrEqualTo, makeIsLessThanOrEqualTo} from '../validator/is-less-than-or-equal-to';
import {TBOpIsNull, makeIsNull} from '../validator/is-null';
import {TBOpIsUndefined, makeIsUndefined} from '../validator/is-undefined';

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
		this.greaterThan = makeIsGreaterThan<TBRuleBe>(this, rule, mods);
		this.greaterThanOrEqualTo = makeIsGreaterThanOrEqualTo<TBRuleBe>(this, rule, mods);
		this.lessThan = makeIsLessThan<TBRuleBe>(this, rule, mods);
		this.lessThanOrEqualTo = makeIsLessThanOrEqualTo<TBRuleBe>(this, rule, mods);
		this.equalTo = makeIsEqualTo<TBRuleBe>(this, rule, mods);
		this.undefined = makeIsUndefined<TBRuleBe>(this, rule, mods);
		this.null = makeIsNull<TBRuleBe>(this, rule, mods);
		this.empty = makeIsEmpty<TBRuleBe>(this, rule, mods);
	}
}
