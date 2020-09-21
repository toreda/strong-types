import KVPRuleChain from '../rule-chain';
import KVPRuleOperator from './operator';
import KVPRuleStatement from '../statement';

export type KVPOpGreaterThanOrEqualTo<CallerType> = (a: any) => CallerType;

export default function createGreaterThanOrEqualTo<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpGreaterThanOrEqualTo<CallerType> {
	function greaterThanOrEqualTo(a: number): CallerType {
		return caller;
	}

	return greaterThanOrEqualTo;
}
