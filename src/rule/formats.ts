import KVPRuleChain from './chain';
import KVPRuleChainFn from './chain-fn';

export type KVPOpMatchFormats<CallerType> = (a: string[]) => CallerType;

const isFormatMatch = (currValue: string, targetFormats: string[]): boolean => {
	if (!Array.isArray(targetFormats)) {
		return false;
	}

	const currType = typeof currValue;

	for (let i = 0; i < targetFormats.length; i++) {
		const type = targetFormats[i];
		if (typeof type !== 'string') {
			break;
		}

		if (currType === type) {
			return true;
		}
	}

	return false;
};

export default function createMatchFormats<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpMatchFormats<CallerType> {
	function matchesFormats(targetFormats: string[]): CallerType {
		const chainFn: KVPRuleChainFn = (currValue: string) => {
			return isFormatMatch(currValue, targetFormats);
		};
		chain.add(chainFn);

		return caller;
	}

	return matchesFormats;
}
