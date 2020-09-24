import KVPRule from './rule';
import KVPRuleFn from './fn';
import KVPRuleNode from './node';
import KVPRuleNodeType from './node-type';

export type KVPOpMatchesTypes<CallerType> = (a: string[]) => CallerType;

const isTypeMatch = (currValue: any, targetTypes: string[]): boolean => {
	if (!Array.isArray(targetTypes)) {
		return false;
	}

	const currType = typeof currValue;

	for (const type of targetTypes) {
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
	rule: KVPRule
): KVPOpMatchesTypes<CallerType> {
	function matchesTypes(targetTypes: string[]): CallerType {
		const fn: KVPRuleFn = (currValue: any) => {
			return isTypeMatch(currValue, targetTypes);
		};
		const node = new KVPRuleNode(KVPRuleNodeType.COMPARISON, fn);
		rule.add(node);

		return caller;
	}

	return matchesTypes;
}
