import {STOpIsDate, makeIsDate} from '../validator/is-date';
import {STOpIsDateTime, makeIsDateTime} from '../validator/is-Date-Time';
import {STOpIsEmail, makeIsEmail} from '../validator/is-email';
import {STOpIsEmpty, makeIsEmpty} from '../validator/is-empty';
import {STOpIsEqualTo, makeIsEqualTo} from '../validator/is-equal-to';
import {STOpIsGreaterThan, makeIsGreaterThan} from '../validator/is-greater-than';
import {
	STOpIsGreaterThanOrEqualTo,
	makeIsGreaterThanOrEqualTo
} from '../validator/is-greater-than-or-equal-to';
import {STOpIsHexColorCode, createIsHexColorCode} from '../validator/pattern/is-hexColorCode';
import {STOpIsLessThan, makeIsLessThan} from '../validator/is-less-than';
import {STOpIsLessThanOrEqualTo, makeIsLessThanOrEqualTo} from '../validator/is-less-than-or-equal-to';
import {STOpIsNull, makeIsNull} from '../validator/is-null';
import {STOpIsTime, makeIsTime} from '../validator/is-time';
import {STOpIsUndefined, makeIsUndefined} from '../validator/is-undefined';
import {STOpIsUrl, makeIsUrl} from '../validator/is-url';

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
	public readonly hexColorCode: STOpIsHexColorCode<STRuleBe>;
	public readonly email: STOpIsEmail<STRuleBe>;
	public readonly url: STOpIsUrl<STRuleBe>;
	public readonly dateTime: STOpIsDateTime<STRuleBe>;

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
		this.hexColorCode = createIsHexColorCode<STRuleBe>(this, rule, mods);
		this.email = makeIsEmail<STRuleBe>(this, rule, mods);
		this.url = makeIsUrl<STRuleBe>(this, rule, mods);
		this.dateTime = makeIsDateTime<STRuleBe>(this, rule, mods);
	}
}
