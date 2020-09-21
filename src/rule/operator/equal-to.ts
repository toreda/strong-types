import KVPRuleChain from '../rule-chain';
import KVPRuleOperator from './operator';
import KVPRuleStatement from '../statement';

export type KVPOpEqualTo<CallerType> = (a: any) => CallerType;

export default function createEqualTo<CallerType>(caller: CallerType, chain: KVPRuleChain): KVPOpEqualTo<CallerType> {
	function equalTo(a: number): CallerType {
		return caller;
	}

	return equalTo;
}
