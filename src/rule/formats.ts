import KVPRuleChain from './chain';
import KVPRuleChainFn from './chain-fn';

export type KVPOpMatchFormats<CallerType> = (a: string[]) => CallerType;

const isFormatMatch = (currValue: string, targetFormats: string[]): boolean => {
	if (!Array.isArray(targetFormats)) {
		return false;
	}

	const currType = typeof currValue;

	for (const format of targetFormats) {
		if (typeof format !== 'string') {
			break;
		}

		if (currType === format) {
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
