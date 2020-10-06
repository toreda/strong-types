import {STRule} from './rule';
import {STRuleModifiers} from './modifiers';
import {STRuleOr} from './or';
import {STRuleType} from '../rule/type';
import {STValidatorPattern} from '../validator/pattern/pattern';

export class STRuleMatch {
	public readonly or: STRuleOr;
	public readonly type: STRuleType;
	public readonly pattern: STValidatorPattern;

	constructor(rule: STRule, parentMods: STRuleModifiers) {
		const mods: STRuleModifiers = {
			invert: parentMods.invert
		};

		this.or = new STRuleOr(rule, mods);
		this.type = new STRuleType(rule, mods);
		this.pattern = new STValidatorPattern(rule, mods);
	}
}
