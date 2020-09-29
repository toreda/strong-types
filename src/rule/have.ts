import {TBOpIsLength, createIsLength} from '../validator/length';

import {TBRule} from './rule';
import {TBRuleModifiers} from './modifiers';

export class TBRuleHave {
	public readonly length: TBOpIsLength<TBRuleHave>;

	constructor(rule: TBRule, mods: TBRuleModifiers) {
		this.length = createIsLength<TBRuleHave>(this, rule, mods);
	}
}
