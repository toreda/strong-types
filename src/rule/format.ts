import KVPRule from './rule';
import KVPRuleFn from './fn';
import KVPRuleNode from './node';
import KVPRuleNodeType from './node-type';
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
	rule: KVPRule
): KVPOpMatchFormat<CallerType> {
	function matchesType(expectedFormat: string): CallerType {
		const fn: KVPRuleFn = (currValue: string) => {
			return formatMatchFn(expectedFormat, currValue);
		};
		const node = new KVPRuleNode('MATCH_FORMAT', KVPRuleNodeType.CMP, fn);
		rule.add(node);

		return caller;
	}

	return matchesType;
}
