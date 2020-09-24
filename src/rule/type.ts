import KVPRuleChain from './chain';
import KVPRuleChainFn from './chain-fn';
import KVPType from '../type';

export type KVPOpMatchType<CallerType> = (a: string | KVPType) => CallerType;

const typeMatchFn = (expectedType: string, value: any): boolean => {
	if (typeof expectedType !== 'string') {
		return false;
	}

	return typeof value.toLowerCase() === expectedType;
};

export default function createMatchType<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpMatchType<CallerType> {
	function matchesType(expectedType: string): CallerType {
		const chainFn: KVPRuleChainFn = (currValue: any) => {
			return typeMatchFn(expectedType, currValue);
		};
		chain.add(chainFn);
		return caller;
	}

	return matchesType;
}
