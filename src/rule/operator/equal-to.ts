import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

const equalToFn = (curr: any, target: any): boolean => {
	if (typeof target === 'undefined' || typeof curr === 'undefined') {
		return false;
	}

	return curr === target;
};

export type KVPOpEqualTo<CallerType> = (a: any) => CallerType;

export default function createEqualTo<CallerType>(
	caller: CallerType,
	rule: KVPRule
): KVPOpEqualTo<CallerType> {
	function equalTo(target: any): CallerType {
		const fn: KVPRuleFn = (curr: any): boolean => {
			return equalToFn(curr, target);
		};
		const node = new KVPRuleNode(KVPRuleNodeType.COMPARISON, fn);
		rule.add(node);
		return caller;
	}

	return equalTo;
}
