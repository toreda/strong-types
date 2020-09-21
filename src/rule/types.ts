import KVPRuleChain from './rule-chain';
import KVPRuleNode from './rule-node';
import KVPRuleOperator from './operator/operator';

export type KVPOpMatchesTypes<CallerType> = (a: string[]) => CallerType;

export default function createMatchTypes<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpMatchesTypes<CallerType> {
	function matchesTypes(a: string[]): CallerType {
		return caller;
	}

	return matchesTypes;
}
