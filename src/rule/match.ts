import {KVPRule} from './rule';
import {KVPRuleModifiers} from './modifiers';
import {KVPRuleOr} from './or';
import {KVPRuleType} from '../validator/type';
import {KVPValidatorPattern} from '../validator/pattern/pattern';

export class KVPRuleMatch {
	public readonly or: KVPRuleOr;
	public readonly type: KVPRuleType;
	public readonly pattern: KVPValidatorPattern;

	constructor(rule: KVPRule, parentMods: KVPRuleModifiers) {
		const mods: KVPRuleModifiers = {
			invert: parentMods.invert
		};

		this.or = new KVPRuleOr(rule, mods);
		this.type = new KVPRuleType(rule, mods);
		this.pattern = new KVPValidatorPattern(rule, mods);
	}
}
