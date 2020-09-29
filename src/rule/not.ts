import {TBOpIsEqualTo, createIsEqualTo} from '../validator/equal-to';

import {TBRule} from './rule';
import {TBRuleBe} from './be';
import {TBRuleModifiers} from './modifiers';

export class TBRuleNot {
	public readonly be: TBRuleBe;
	public readonly equal: TBOpIsEqualTo<TBRuleNot>;

	constructor(rule: TBRule, parentMods: TBRuleModifiers) {
		const mods: TBRuleModifiers = {
			invert: !parentMods.invert
		};
		this.be = new TBRuleBe(rule, mods);
		this.equal = createIsEqualTo<TBRuleNot>(this, rule, mods);
	}
}
