import {STOpIsEqualTo, makeIsEqualTo} from '../validator/is-equal-to';

import {STRule} from './rule';
import {STRuleBe} from './be';
import {STRuleModifiers} from './modifiers';

export class STRuleNot {
	public readonly be: STRuleBe;
	public readonly equal: STOpIsEqualTo<STRuleNot>;

	constructor(rule: STRule, parentMods: STRuleModifiers) {
		const mods: STRuleModifiers = {
			invert: !parentMods.invert
		};
		this.be = new STRuleBe(rule, mods);
		this.equal = makeIsEqualTo<STRuleNot>(this, rule, mods);
	}
}
