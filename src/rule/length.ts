import {HasLengthGTE, hasLengthGTEMake} from '../has/length/gte';
import {HasLengthLT, hasLengthLTMake} from '../has/length/lt';

import {HasLengthEqual} from '../has/length-equal';
import {HasLengthGT} from '../has/length/gt';
import {HasLengthLTE} from '../has/length/lte';
import {Rule} from '../rule';
import {RuleMods} from '../rule/mods';
import {hasLengthEqualMake} from '../has/length-equal';
import {hasLengthGTMake} from '../has/length/gt';
import {hasLengthLTEMake} from '../has/length/lte';

/**
 * @category Rules
 */
export class RuleLength {
	public readonly equalTo: HasLengthEqual<RuleLength>;
	public readonly greaterThan: HasLengthGT<RuleLength>;
	public readonly greaterThanOrEqualTo: HasLengthGTE<RuleLength>;
	public readonly lessThan: HasLengthLT<RuleLength>;
	public readonly lessThanOrEqualTo: HasLengthLTE<RuleLength>;

	constructor(rule: Rule, mods: RuleMods) {
		this.equalTo = hasLengthEqualMake<RuleLength>(this, rule, mods);
		this.greaterThan = hasLengthGTMake<RuleLength>(this, rule, mods);
		this.greaterThanOrEqualTo = hasLengthGTEMake<RuleLength>(this, rule, mods);
		this.lessThan = hasLengthLTMake<RuleLength>(this, rule, mods);
		this.lessThanOrEqualTo = hasLengthLTEMake<RuleLength>(this, rule, mods);
	}
}
