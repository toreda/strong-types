import {TBOpIsLength, makeIsLength} from '../validator/is-length';

import {TBRule} from './rule';
import {TBRuleModifiers} from './modifiers';

export class TBRuleHave {
	public readonly length: TBOpIsLength<TBRuleHave>;

	constructor(rule: TBRule, mods: TBRuleModifiers) {
		this.length = makeIsLength<TBRuleHave>(this, rule, mods);
	}
}
