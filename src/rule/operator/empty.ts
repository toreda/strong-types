import KVPRuleChain from '../chain';
import KVPRuleChainFn from '../chain-fn';

const emptyFn = (curr: any[] | number) => {
	if (!Array.isArray(curr) && typeof curr !== 'number') {
		return false;
	}

	if (typeof curr === 'number') {
		return curr === 0;
	}

	return curr.length === 0;
};

export type KVPOpEmpty<CallerType> = (a: any) => CallerType;

export default function createEmpty<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpEmpty<CallerType> {
	function empty(): CallerType {
		const chainFn: KVPRuleChainFn = (curr: any[] | number): boolean => {
			return emptyFn(curr);
		};
		chain.add(chainFn);

		return caller;
	}

	return empty;
}
