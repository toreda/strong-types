import {KVPOpIsLength, createIsLength} from '../validator/length';

import {KVPRule} from './rule';
import {KVPRuleModifiers} from './modifiers';

export class KVPRuleHave {
	public readonly length: KVPOpIsLength<KVPRuleHave>;

	constructor(rule: KVPRule, mods: KVPRuleModifiers) {
		this.length = createIsLength<KVPRuleHave>(this, rule, mods);
	}
}
