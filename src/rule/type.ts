import KVPRule from './rule';
import KVPRuleFn from './fn';
import KVPRuleNode from './node';
import KVPRuleNodeType from './node-type';
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
	rule: KVPRule
): KVPOpMatchType<CallerType> {
	function matchesType(expectedType: string): CallerType {
		const fn: KVPRuleFn = (currValue: any) => {
			return typeMatchFn(expectedType, currValue);
		};
		const node = new KVPRuleNode(KVPRuleNodeType.COMPARISON, fn);
		rule.add(node);

		return caller;
	}

	return matchesType;
}
