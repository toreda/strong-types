import {IsDate, makeIsDate} from '../is/date';
import {IsDateTime, makeIsDateTime} from '../is/date-time';
import {IsEmail, makeIsEmail} from '../is/email';
import {IsEmpty, makeIsEmpty} from '../is/empty';
import {IsEqualTo, makeIsEqualTo} from '../is/equal-to';
import {IsGreaterThan, makeIsGreaterThan} from '../is/greater-than';
import {IsGreaterThanOrEqualTo, makeIsGreaterThanOrEqualTo} from '../is/greater-than-or-equal-to';
import {IsHexColorCode, makeIsHexColorCode} from '../is/hex-color-code';
import {IsLessThan, makeIsLessThan} from '../is/less-than';
import {IsLessThanOrEqualTo, makeIsLessThanOrEqualTo} from '../is/less-than-or-equal-to';
import {IsNull, makeIsNull} from '../is/null';
import {IsTime, makeIsTime} from '../is/time';
import {IsUndefined, makeIsUndefined} from '../is/undefined';
import {IsUrl, makeIsUrl} from '../is/url';

import {Rule} from '../rule';
import {RuleMods} from './mods';

/**
 * @category Rules
 */
export class RuleBe {
	public readonly ['null']: IsNull<RuleBe>;
	public readonly ['undefined']: IsUndefined<RuleBe>;
	public readonly date: IsDate<RuleBe>;
	public readonly dateTime: IsDateTime<RuleBe>;
	public readonly email: IsEmail<RuleBe>;
	public readonly empty: IsEmpty<RuleBe>;
	public readonly equalTo: IsEqualTo<RuleBe>;
	public readonly greaterThan: IsGreaterThan<RuleBe>;
	public readonly greaterThanOrEqualTo: IsGreaterThanOrEqualTo<RuleBe>;
	public readonly hexColorCode: IsHexColorCode<RuleBe>;
	public readonly lessThan: IsLessThan<RuleBe>;
	public readonly lessThanOrEqualTo: IsLessThanOrEqualTo<RuleBe>;
	public readonly time: IsTime<RuleBe>;
	public readonly url: IsUrl<RuleBe>;

	constructor(rule: Rule, mods: RuleMods) {
		this.greaterThan = makeIsGreaterThan<RuleBe>(this, rule, mods);
		this.greaterThanOrEqualTo = makeIsGreaterThanOrEqualTo<RuleBe>(this, rule, mods);
		this.lessThan = makeIsLessThan<RuleBe>(this, rule, mods);
		this.lessThanOrEqualTo = makeIsLessThanOrEqualTo<RuleBe>(this, rule, mods);
		this.equalTo = makeIsEqualTo<RuleBe>(this, rule, mods);
		this.undefined = makeIsUndefined<RuleBe>(this, rule, mods);
		this.null = makeIsNull<RuleBe>(this, rule, mods);
		this.empty = makeIsEmpty<RuleBe>(this, rule, mods);
		this.date = makeIsDate<RuleBe>(this, rule, mods);
		this.time = makeIsTime<RuleBe>(this, rule, mods);
		this.hexColorCode = makeIsHexColorCode<RuleBe>(this, rule, mods);
		this.email = makeIsEmail<RuleBe>(this, rule, mods);
		this.url = makeIsUrl<RuleBe>(this, rule, mods);
		this.dateTime = makeIsDateTime<RuleBe>(this, rule, mods);
	}
}
