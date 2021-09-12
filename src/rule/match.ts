import {Pattern} from '../pattern';
import {Rule} from '../rule';
import {RuleMods} from './mods';
import {RuleOr} from './or';
import {RuleType} from '../rule/type';

/**
 * Source must match the comparator immediately following a match.
 *
 * @category Rules
 */
export class RuleMatch {
	public readonly or: RuleOr;
	public readonly type: RuleType;
	public readonly pattern: Pattern;

	constructor(rule: Rule, parentMods: RuleMods) {
		const mods: RuleMods = {
			invert: parentMods.invert
		};

		this.or = new RuleOr(rule, mods);
		this.type = new RuleType(rule, mods);
		this.pattern = new Pattern(rule, mods);
	}
}
