import KVPRuleChain from './chain';
import KVPRuleChainFn from './chain-fn';

export type KVPOpMatchesTypes<CallerType> = (a: string[]) => CallerType;

const isTypeMatch = (currValue: any, targetTypes: string[]): boolean => {
	if (!Array.isArray(targetTypes)) {
		return false;
	}

	const currType = typeof currValue;

	for (let i = 0; i < targetTypes.length; i++) {
		const type = targetTypes[i];
		if (typeof type !== 'string') {
			break;
		}

		if (currType === type) {
			return true;
		}
	}

	return false;
};

export default function createMatchTypes<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpMatchesTypes<CallerType> {
	function matchesTypes(targetTypes: string[]): CallerType {
		const chainFn: KVPRuleChainFn = (currValue: any) => {
			return isTypeMatch(currValue, targetTypes);
		};
		chain.add(chainFn);

		return caller;
	}

	return matchesTypes;
}
