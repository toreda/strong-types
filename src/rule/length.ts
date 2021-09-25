import {
	HasLengthGreaterThanOrEqual,
	hasLengthGreaterThanOrEqualMake
} from '../has/length-greater-than-or-equal';
import {HasLengthLessThan, hasLengthLessThanMake} from '../has/length-less-than';

import {HasLengthEqual} from '../has/length-equal';
import {HasLengthGreaterThan} from '../has/length-greater-than';
import {HasLengthLessThanOrEqual} from '../has/length-less-than-or-equal';
import {Rule} from '../rule';
import {RuleMods} from '../rule/mods';
import {hasLengthEqualMake} from '../has/length-equal';
import {hasLengthGreaterThanMake} from '../has/length-greater-than';
import {hasLengthLessThanOrEqualMake} from '../has/length-less-than-or-equal';

/**
 * @category Rules
 */
export class RuleLength {
	public readonly equalTo: HasLengthEqual<RuleLength>;
	public readonly greaterThan: HasLengthGreaterThan<RuleLength>;
	public readonly greaterThanOrEqualTo: HasLengthGreaterThanOrEqual<RuleLength>;
	public readonly lessThan: HasLengthLessThan<RuleLength>;
	public readonly lessThanOrEqualTo: HasLengthLessThanOrEqual<RuleLength>;

	constructor(rule: Rule, mods: RuleMods) {
		this.equalTo = hasLengthEqualMake<RuleLength>(this, rule, mods);
		this.greaterThan = hasLengthGreaterThanMake<RuleLength>(this, rule, mods);
		this.greaterThanOrEqualTo = hasLengthGreaterThanOrEqualMake<RuleLength>(this, rule, mods);
		this.lessThan = hasLengthLessThanMake<RuleLength>(this, rule, mods);
		this.lessThanOrEqualTo = hasLengthLessThanOrEqualMake<RuleLength>(this, rule, mods);
	}
}
