import {TBOpIsEqualTo, makeIsEqualTo} from '../validator/is-equal-to';

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
		this.equal = makeIsEqualTo<TBRuleNot>(this, rule, mods);
	}
}
