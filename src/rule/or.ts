import {Rule} from '../rule';
import {RuleMods} from './mods';
import {RuleType} from './type';

export class RuleOr {
	public type: RuleType;

	constructor(rule: Rule, parentMods: RuleMods) {
		this.type = new RuleType(rule, parentMods);
	}
}
