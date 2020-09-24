import KVPRuleChain from '../chain';
import KVPRuleChainFn from '../chain-fn';

export type KVPOpLessThan<CallerType> = (a: number) => CallerType;

const lessThanFn = (curr: number, target: number) => {
	return curr < target;
};

export default function createLessThan<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpLessThan<CallerType> {
	function lessThan(target: number): CallerType {
		const chainFn: KVPRuleChainFn = (curr: number) => {
			return lessThanFn(curr, target);
		};
		chain.add(chainFn);

		return caller;
	}

	return lessThan;
}
