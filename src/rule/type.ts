import KVPRuleChain from './rule-chain';
import KVPRuleNode from './rule-node';
import KVPRuleOperator from './operator/operator';

export type KVPOpMatchType<CallerType> = (a: string) => CallerType;

export default function createMatchType<CallerType>(caller: CallerType, chain: KVPRuleChain): KVPOpMatchType<CallerType> {
	function matchesType(a: string): CallerType {
		return caller;
	}

	return matchesType;
}