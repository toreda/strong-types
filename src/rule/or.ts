import {STRule} from './rule';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleType} from './type';

export class STRuleOr {
	public type: STRuleType;

	constructor(rule: STRule, parentMods: STRuleModifiers) {
		this.type = new STRuleType(rule, parentMods);
	}
}
