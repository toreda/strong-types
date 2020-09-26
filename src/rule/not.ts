import KVPOpEqualTo, {createEqualTo} from '../validator/equal-to';

import KVPRule from './rule';
import KVPRuleBe from './be';
import KVPRuleModifiers from './modifiers';

export default class KVPRuleNot {
	public readonly be: KVPRuleBe;
	public readonly equal: KVPOpEqualTo<KVPRuleNot>;

	constructor(rule: KVPRule, parentMods: KVPRuleModifiers) {
		const mods: KVPRuleModifiers = {
			invert: !parentMods.invert
		};
		this.be = new KVPRuleBe(rule, mods);
		this.equal = createEqualTo<KVPRuleNot>(this, rule, mods);
	}
}
