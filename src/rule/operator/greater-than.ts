import KVPRuleChain from '../rule-chain';
import KVPRuleOperator from './operator';
import KVPRuleStatement from '../statement';

export type KVPOpGreaterThan<CallerType> = (a: any) => CallerType;

export default function createGreaterThan<CallerType>(caller: CallerType, chain: KVPRuleChain): KVPOpGreaterThan<CallerType> {
	function greaterThan(a: number): CallerType {
		 return caller;

	}

	return greaterThan;
}
