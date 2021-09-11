import {IsEqualTo, makeIsEqualTo} from '../is/equal-to';

import {Rule} from '../rule';
import {RuleBe} from './be';
import {RuleMods} from './mods';

export class RuleNot {
	public readonly be: RuleBe;
	public readonly equal: IsEqualTo<RuleNot>;

	constructor(rule: Rule, parentMods: RuleMods) {
		const mods: RuleMods = {
			invert: !parentMods.invert
		};
		this.be = new RuleBe(rule, mods);
		this.equal = makeIsEqualTo<RuleNot>(this, rule, mods);
	}
}
