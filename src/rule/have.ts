import {STOpIsLength, makeIsLength} from '../validator/is-length';

import {STRule} from './rule';
import {STRuleModifiers} from './modifiers';

export class STRuleHave {
	public readonly length: STOpIsLength<STRuleHave>;

	constructor(rule: STRule, mods: STRuleModifiers) {
		this.length = makeIsLength<STRuleHave>(this, rule, mods);
	}
}
