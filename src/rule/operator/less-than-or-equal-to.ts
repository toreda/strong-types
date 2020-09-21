import KVPRuleChain from '../rule-chain';
import KVPRuleOperator from './operator';
import KVPRuleStatement from '../statement';

export type KVPOpLessThanOrEqualTo<CallerType> = (a: any) => CallerType;

export default function createLessThanOrEqualTo<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpLessThanOrEqualTo<CallerType> {
	function lessThanOrEqualTo(a: number): CallerType {
		return caller;
	}

	return lessThanOrEqualTo;
}
