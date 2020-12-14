import {STOpIsDate, makeIsDate} from '../validator/is-date';
import {STOpIsEmpty, makeIsEmpty} from '../validator/is-empty';
import {STOpIsEqualTo, makeIsEqualTo} from '../validator/is-equal-to';
import {STOpIsGreaterThan, makeIsGreaterThan} from '../validator/is-greater-than';
import {
	STOpIsGreaterThanOrEqualTo,
	makeIsGreaterThanOrEqualTo
} from '../validator/is-greater-than-or-equal-to';
import {STOpIsLessThan, makeIsLessThan} from '../validator/is-less-than';
import {STOpIsLessThanOrEqualTo, makeIsLessThanOrEqualTo} from '../validator/is-less-than-or-equal-to';
import {STOpIsNull, makeIsNull} from '../validator/is-null';
import {STOpIsTime, makeIsTime} from '../validator/is-time';
import {STOpIsUndefined, makeIsUndefined} from '../validator/is-undefined';

import {STRule} from './rule';
import {STRuleModifiers} from '../rule/modifiers';

export class STRuleBe {
	public readonly greaterThan: STOpIsGreaterThan<STRuleBe>;
	public readonly greaterThanOrEqualTo: STOpIsGreaterThanOrEqualTo<STRuleBe>;
	public readonly lessThanOrEqualTo: STOpIsLessThanOrEqualTo<STRuleBe>;
	public readonly lessThan: STOpIsLessThan<STRuleBe>;
	public readonly equalTo: STOpIsEqualTo<STRuleBe>;
	public readonly ['undefined']: STOpIsUndefined<STRuleBe>;
	public readonly ['null']: STOpIsNull<STRuleBe>;
	public readonly empty: STOpIsEmpty<STRuleBe>;
	public readonly date: STOpIsDate<STRuleBe>;
	public readonly time: STOpIsTime<STRuleBe>;

	constructor(rule: STRule, mods: STRuleModifiers) {
		this.greaterThan = makeIsGreaterThan<STRuleBe>(this, rule, mods);
		this.greaterThanOrEqualTo = makeIsGreaterThanOrEqualTo<STRuleBe>(this, rule, mods);
		this.lessThan = makeIsLessThan<STRuleBe>(this, rule, mods);
		this.lessThanOrEqualTo = makeIsLessThanOrEqualTo<STRuleBe>(this, rule, mods);
		this.equalTo = makeIsEqualTo<STRuleBe>(this, rule, mods);
		this.undefined = makeIsUndefined<STRuleBe>(this, rule, mods);
		this.null = makeIsNull<STRuleBe>(this, rule, mods);
		this.empty = makeIsEmpty<STRuleBe>(this, rule, mods);
		this.date = makeIsDate<STRuleBe>(this, rule, mods);
		this.time = makeIsTime<STRuleBe>(this, rule, mods);
	}
}
