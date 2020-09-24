import KVPOpGreaterThanOrEqualTo from './greater-than-or-equal-to';
import KVPRuleChain from '../chain';
import KVPRuleChainFn from '../chain-fn';

export type KVPOpGreaterThanOrEqualTo<CallerType> = (a: number) => CallerType;

const greaterThanOrEqualToFn = (curr: number, target: number) => {
	return curr >= target;
};

export default function createGreaterThan<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpGreaterThanOrEqualTo<CallerType> {
	function greaterThanOrEqualTo(target: number): CallerType {
		const chainFn: KVPRuleChainFn = (curr: number) => {
			return greaterThanOrEqualToFn(curr, target);
		};
		chain.add(chainFn);

		return caller;
	}

	return greaterThanOrEqualTo;
}
