import KVPRuleChain from './chain';
import KVPRuleChainFn from './chain-fn';
import KVPType from '../type';

export type KVPOpMatchFormat<CallerType> = (a: string | KVPType) => CallerType;

const formatMatchFn = (expectedFormat: string, value: string): boolean => {
	if (typeof expectedFormat !== 'string') {
		return false;
	}

	return typeof value.toLowerCase() === expectedFormat;
};

export default function createMatchFormat<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpMatchFormat<CallerType> {
	function matchesType(expectedFormat: string): CallerType {
		const chainFn: KVPRuleChainFn = (currValue: string) => {
			return formatMatchFn(expectedFormat, currValue);
		};
		chain.add(chainFn);

		return caller;
	}

	return matchesType;
}
