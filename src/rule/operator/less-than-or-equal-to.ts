import KVPOpLessThanOrEqualTo from './less-than-or-equal-to';
import KVPRuleChain from '../chain';
import KVPRuleChainFn from '../chain-fn';

export type KVPOpLessThanOrEqualTo<CallerType> = (a: number) => CallerType;

const lessThanOrEqualToFn = (curr: number, target: number) => {
	return curr <= target;
};

export default function createLessThan<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpLessThanOrEqualTo<CallerType> {
	function lessThanOrEqualTo(target: number): CallerType {
		const chainFn: KVPRuleChainFn = (curr: number) => {
			return lessThanOrEqualToFn(curr, target);
		};
		chain.add(chainFn);

		return caller;
	}

	return lessThanOrEqualTo;
}
