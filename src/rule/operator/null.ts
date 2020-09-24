import KVPRuleChain from '../chain';
import KVPRuleChainFn from '../chain-fn';

export type KVPOpIsNull<CallerType> = () => CallerType;

function isNull(curr: any): boolean {
	return curr === null;
}

export default function createNullTest<CallerType>(caller: CallerType, chain: KVPRuleChain): KVPOpIsNull<CallerType> {
	function nullTest(): CallerType {
		const chainFn: KVPRuleChainFn = (curr: any): boolean => {
			return isNull(curr);
		};
		chain.add(chainFn);
		return caller;
	}

	return nullTest;
}
