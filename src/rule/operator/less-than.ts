import KVPRuleChain from '../rule-chain';
import KVPRuleStatement from '../statement';
import KVPRulesOperator from './operator';

export type KVPOpLessThan<CallerType> = (a: any) => CallerType;

export default function createLessThan<CallerType>(caller: CallerType, chain: KVPRuleChain): KVPOpLessThan<CallerType> {
	function lessThan(a: number): CallerType {
		return caller;
	}

	return lessThan;
}
