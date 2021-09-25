import {IsEqual, isEqualMake} from '../is/equal';

import {Rule} from '../rule';
import {RuleBe} from './be';
import {RuleMods} from './mods';

/**
 * Inverts the operation immediately following it.
 *
 * @category Rules
 */
export class RuleNot {
	public readonly be: RuleBe;
	public readonly equalTo: IsEqual<RuleNot>;

	constructor(rule: Rule, parentMods: RuleMods) {
		const mods: RuleMods = {
			invert: !parentMods.invert,
			target: parentMods.target
		};

		this.be = new RuleBe(rule, mods);
		this.equalTo = isEqualMake<RuleNot>(this, rule, mods);
	}
}
