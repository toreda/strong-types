import KVPRuleChain from '../chain';
import KVPRuleChainFn from '../chain-fn';

export type KVPOpBeUndefined<CallerType> = (curr: any) => CallerType;

function valueIsUndefined(currValue: any): boolean {
	return typeof currValue === 'undefined';
}

export default function createUndefinedTest<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpBeUndefined<CallerType> {
	function beUndefined(currValue: any): CallerType {
		const chainFn: KVPRuleChainFn = (a: any) => {
			return valueIsUndefined(currValue);
		};
		chain.add(chainFn);

		return caller;
	}

	return beUndefined;
}
