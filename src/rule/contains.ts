import {HasChar, makeHasChar} from '../has/char';
import {HasCharTimes, makeHasCharTimes} from '../has/char-times';
import {HasText, makeHasText} from '../has/text';
import {HasTextTimes, makeHasTextTimes} from '../has/text-times';

import {Rule} from '../rule';
import {RuleMods} from './mods';

/**
 * @category Rules
 */
export class RuleContains {
	public readonly text: HasText<RuleContains>;
	public readonly textTimes: HasTextTimes<RuleContains>;
	public readonly char: HasChar<RuleContains>;
	public readonly charTimes: HasCharTimes<RuleContains>;

	constructor(rule: Rule, mods: RuleMods) {
		this.text = makeHasText<RuleContains>(this, rule, mods);
		this.textTimes = makeHasTextTimes<RuleContains>(this, rule, mods);

		this.char = makeHasChar<RuleContains>(this, rule, mods);
		this.charTimes = makeHasCharTimes<RuleContains>(this, rule, mods);
	}
}
