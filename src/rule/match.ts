import {TBRule} from './rule';
import {TBRuleModifiers} from './modifiers';
import {TBRuleOr} from './or';
import {TBRuleType} from '../validator/type';
import {TBValidatorPattern} from '../validator/pattern/pattern';

export class TBRuleMatch {
	public readonly or: TBRuleOr;
	public readonly type: TBRuleType;
	public readonly pattern: TBValidatorPattern;

	constructor(rule: TBRule, parentMods: TBRuleModifiers) {
		const mods: TBRuleModifiers = {
			invert: parentMods.invert
		};

		this.or = new TBRuleOr(rule, mods);
		this.type = new TBRuleType(rule, mods);
		this.pattern = new TBValidatorPattern(rule, mods);
	}
}
