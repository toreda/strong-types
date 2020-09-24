import KVPRuleChain from '../chain';
import KVPRuleChainFn from '../chain-fn';

// FIXME: Fix this before release. It does nothing.
const equalToFn = (a: any, curr: any) => {
	if (typeof a === 'undefined' || typeof curr === 'undefined') {
		return false;
	}

	return a === curr;
};

export type KVPOpEqualTo<CallerType> = (a: any) => CallerType;

export default function createEqualTo<CallerType>(caller: CallerType, chain: KVPRuleChain): KVPOpEqualTo<CallerType> {
	function equalTo(a: any): CallerType {
		const chainFn: KVPRuleChainFn = (curr: any): boolean => {
			return equalToFn(a, curr);
		};
		chain.add(chainFn);
		return caller;
	}

	return equalTo;
}
