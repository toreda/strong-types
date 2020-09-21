import KVPRuleChain from '../rule-chain';
import KVPRuleOperator from './operator';
import KVPRuleStatement from '../statement';

export type KVPOpIsUndefined<CallerType> = () => CallerType;

export default function createUndefinedTest<CallerType>(caller: CallerType, chain: KVPRuleChain): KVPOpIsUndefined<CallerType> {
	function undefinedTest(): CallerType {
		return caller;
	}

	return undefinedTest;
}
