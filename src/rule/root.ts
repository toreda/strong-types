import {RuleMust} from './must';

/**
 * First node for any rule chain.
 *
 * @category Rules
 */
export interface RuleRoot {
	must: RuleMust;
}
