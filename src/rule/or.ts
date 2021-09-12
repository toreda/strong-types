import {Rule} from '../rule';
import {RuleMods} from './mods';
import {RuleType} from './type';

/**
 * Rule chain operator which requires either the proceeding or following
 * operation node return true.
 *
 * @category Rules
 */
export class RuleOr {
	public type: RuleType;

	constructor(rule: Rule, parentMods: RuleMods) {
		this.type = new RuleType(rule, parentMods);
	}
}
