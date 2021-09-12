import {HasProperty, makeHasProperty} from '../has/property';
import {IsLength, makeIsLength} from '../is/length';

import {Rule} from '../rule';
import {RuleMods} from './mods';

/**
 * @category Rules
 */
export class RuleHave {
	public readonly length: IsLength<RuleHave>;
	public readonly property: HasProperty<RuleHave>;

	constructor(rule: Rule, mods: RuleMods) {
		this.length = makeIsLength<RuleHave>(this, rule, mods);
		this.property = makeHasProperty<RuleHave>(this, rule, mods);
	}
}
