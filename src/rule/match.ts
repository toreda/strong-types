import KVPRule from './rule';
import KVPRuleModifiers from './modifiers';
import KVPRuleOr from './or';
import KVPRulePattern from '../validator/pattern/pattern';
import KVPRuleType from '../validator/type';

export default class KVPRuleMatch {
	public readonly or: KVPRuleOr;
	public readonly type: KVPRuleType;
	public readonly pattern: KVPRulePattern;

	constructor(rule: KVPRule, parentMods: KVPRuleModifiers) {
		const mods: KVPRuleModifiers = {
			invert: parentMods.invert
		};

		this.or = new KVPRuleOr(rule, mods);
		this.type = new KVPRuleType(rule, mods);
		this.pattern = new KVPRulePattern(rule, mods);
	}
}
