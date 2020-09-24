import KVPRuleChain from '../chain';
import KVPRuleChainFn from '../chain-fn';

// FIXME: Fix this before release. It does nothing.
const haveLengthFn = (curr: any[] | number, expectedLength: number) => {
	if (!Array.isArray(curr) && typeof curr !== 'number') {
		return false;
	}

	if (typeof curr === 'number') {
		return curr === expectedLength;
	}

	return curr.length === expectedLength;
};

export type KVPOpHaveLength<CallerType> = (a: any) => CallerType;

export default function createHaveLength<CallerType>(
	caller: CallerType,
	chain: KVPRuleChain
): KVPOpHaveLength<CallerType> {
	function haveLength(expectedLength: number): CallerType {
		const chainFn: KVPRuleChainFn = (curr: any[] | number): boolean => {
			return haveLengthFn(curr, expectedLength);
		};
		chain.add(chainFn);

		return caller;
	}

	return haveLength;
}
