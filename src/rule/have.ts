import {STOpIsLength, makeIsLength} from '../validator/is-length';
import {STOpIsProperty, makeHasProperty} from '../validator/is-property';

import {STRule} from './rule';
import {STRuleModifiers} from './modifiers';

export class STRuleHave {
	public readonly length: STOpIsLength<STRuleHave>;
	public readonly property: STOpIsProperty<STRuleHave>;

	constructor(rule: STRule, mods: STRuleModifiers) {
		this.length = makeIsLength<STRuleHave>(this, rule, mods);
		this.property = makeHasProperty<STRuleHave>(this, rule, mods);
	}
}
