/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2022 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

import {IsDate, isDateMake} from '../is/date';
import {IsDateTime, isDateTimeMake} from '../is/date/time';
import {IsEmail, isEmailMake} from '../is/email';
import {IsEmpty, isEmptyMake} from '../is/empty';
import {IsEqual, isEqualMake} from '../is/equal';
import {IsGT, isGTMake} from '../is/gt';
import {IsGTE, isGTEMake} from '../is/gte';
import {IsHexColorCode, isHexColorCodeMake} from '../is/hex-color-code';
import {IsLT, isLTMake} from '../is/lt';
import {IsLTE, isLTEMake} from '../is/lte';
import {IsNull, isNullMake} from '../is/null';
import {IsPort, isPortMake} from '../is/port';
import {IsSystemPort, isSystemPortMake} from '../is/system/port';
import {IsTime, isTimeMake} from '../is/time';
import {IsUndefined, isUndefinedMake} from '../is/undefined';
import {IsUrl, isUrlMake} from '../is/url';

import {IsIpv4Addr} from '../is/ipv4/addr';
import {IsIpv6Addr} from '../is/ipv6/addr';
import {Rule} from '../rule';
import {RuleMods} from './mods';
import {isIpv4AddrMake} from '../is/ipv4/addr/make';
import {isIpv6AddrMake} from '../is/ipv6/addr/make';

/**
 * Rule chain matcher node with equality and type validation operations
 *
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
	public readonly greaterThan: IsGT<RuleBe>;
	public readonly greaterThanOrEqual: IsGTE<RuleBe>;
	public readonly hexColorCode: IsHexColorCode<RuleBe>;
	public readonly lessThan: IsLT<RuleBe>;
	public readonly lessThanOrEqual: IsLTE<RuleBe>;
	public readonly time: IsTime<RuleBe>;
	public readonly url: IsUrl<RuleBe>;
	public readonly portNumber: IsPort<RuleBe>;
	public readonly systemPortNumber: IsSystemPort<RuleBe>;
	public readonly ipv4Addr: IsIpv4Addr<RuleBe>;
	public readonly ipv6Addr: IsIpv6Addr<RuleBe>;

	constructor(rule: Rule, mods: RuleMods) {
		this.greaterThan = isGTMake<RuleBe>(this, rule, mods);
		this.greaterThanOrEqual = isGTEMake<RuleBe>(this, rule, mods);
		this.lessThan = isLTMake<RuleBe>(this, rule, mods);
		this.lessThanOrEqual = isLTEMake<RuleBe>(this, rule, mods);
		this.equalTo = isEqualMake<RuleBe>(this, rule, mods);
		this.undefined = isUndefinedMake<RuleBe>(this, rule, mods);
		this.null = isNullMake<RuleBe>(this, rule, mods);
		this.empty = isEmptyMake<RuleBe>(this, rule, mods);
		this.date = isDateMake<RuleBe>(this, rule, mods);
		this.time = isTimeMake<RuleBe>(this, rule, mods);
		this.hexColorCode = isHexColorCodeMake<RuleBe>(this, rule, mods);
		this.email = isEmailMake<RuleBe>(this, rule, mods);
		this.url = isUrlMake<RuleBe>(this, rule, mods);
		this.dateTime = isDateTimeMake<RuleBe>(this, rule, mods);
		this.portNumber = isPortMake<RuleBe>(this, rule, mods);
		this.systemPortNumber = isSystemPortMake<RuleBe>(this, rule, mods);
		this.ipv4Addr = isIpv4AddrMake<RuleBe>(this, rule, mods);
		this.ipv6Addr = isIpv6AddrMake<RuleBe>(this, rule, mods);
	}
}
