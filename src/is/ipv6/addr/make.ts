import {IsIpv6Addr, isIpv6Addr} from '../addr';

import {Rule} from '../../../rule';
import {RuleFn} from '../../../rule/fn';
import {RuleMods} from '../../../rule/mods';
import {RuleNode} from '../../../rule/node';
import {RuleNodeType} from '../../../rule/node/type';

/**
 * Factory to create isIpv6Addr validator function used in rule chains.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory Functions
 */
export function isIpv6AddrMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): IsIpv6Addr<CallerT> {
	return (): CallerT => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isIpv6Addr(curr);
		};

		const node = new RuleNode<string>('IS_IPV6_ADDR', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
