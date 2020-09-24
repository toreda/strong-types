import KVPRuleChain from '../chain';
import KVPRuleChainFn from '../chain-fn';

export type KVPOpGreaterThan<CallerType> = (a: number) => CallerType;

const greaterThanFn = (curr: number, target: number): boolean => {
	return curr > target;
};

export default function createGreaterThan<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpGreaterThan<CallerType> {
	function greaterThan(target: number): CallerType {
		const chainFn: KVPRuleChainFn = (curr: number) => {
			return greaterThanFn(curr, target);
		};
		chain.add(chainFn);

		return caller;
	}

	return greaterThan;
}
