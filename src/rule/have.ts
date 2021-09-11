import {IsLength, makeIsLength} from '../is/length';
import {IsProperty, makeHasProperty} from '../is/property';

import {Rule} from '../rule';
import {RuleMods} from './mods';

export class RuleHave {
	public readonly length: IsLength<RuleHave>;
	public readonly property: IsProperty<RuleHave>;

	constructor(rule: Rule, mods: RuleMods) {
		this.length = makeIsLength<RuleHave>(this, rule, mods);
		this.property = makeHasProperty<RuleHave>(this, rule, mods);
	}
}
