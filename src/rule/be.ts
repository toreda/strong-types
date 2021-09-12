import {IsDate, makeIsDate} from '../is/date';
import {IsDateTime, makeIsDateTime} from '../is/date-time';
import {IsEmail, makeIsEmail} from '../is/email';
import {IsEmpty, makeIsEmpty} from '../is/empty';
import {IsEqual, makeIsEqual} from '../is/equal';
import {IsGreaterThan, makeIsGreaterThan} from '../is/greater-than';
import {IsGreaterThanOrEqual, makeIsGreaterThanOrEqual} from '../is/greater-than-or-equal';
import {IsHexColorCode, makeIsHexColorCode} from '../is/hex-color-code';
import {IsLessThan, makeIsLessThan} from '../is/less-than';
import {IsLessThanOrEqual, makeIsLessThanOrEqual} from '../is/less-than-or-equal';
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
	public readonly equalTo: IsEqual<RuleBe>;
	public readonly greaterThan: IsGreaterThan<RuleBe>;
	public readonly greaterThanOrEqual: IsGreaterThanOrEqual<RuleBe>;
	public readonly hexColorCode: IsHexColorCode<RuleBe>;
	public readonly lessThan: IsLessThan<RuleBe>;
	public readonly lessThanOrEqual: IsLessThanOrEqual<RuleBe>;
	public readonly time: IsTime<RuleBe>;
	public readonly url: IsUrl<RuleBe>;

	constructor(rule: Rule, mods: RuleMods) {
		this.greaterThan = makeIsGreaterThan<RuleBe>(this, rule, mods);
		this.greaterThanOrEqual = makeIsGreaterThanOrEqual<RuleBe>(this, rule, mods);
		this.lessThan = makeIsLessThan<RuleBe>(this, rule, mods);
		this.lessThanOrEqual = makeIsLessThanOrEqual<RuleBe>(this, rule, mods);
		this.equalTo = makeIsEqual<RuleBe>(this, rule, mods);
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
