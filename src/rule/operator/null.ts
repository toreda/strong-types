import KVPRuleChain from '../rule-chain';
import KVPRuleOperator from './operator';
import KVPRuleStatement from '../statement';

export type KVPOpIsNull<CallerType> = () => CallerType;

export default function createNullTest<CallerType>(caller: CallerType, chain: KVPRuleChain): KVPOpIsNull<CallerType> {
	function nullTest(): CallerType {
		return caller;
	}

	return nullTest;
}
