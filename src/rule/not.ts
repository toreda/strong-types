import {IsEqual, makeIsEqual} from '../is/equal';

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
			invert: !parentMods.invert
		};
		this.be = new RuleBe(rule, mods);
		this.equalTo = makeIsEqual<RuleNot>(this, rule, mods);
	}
}
