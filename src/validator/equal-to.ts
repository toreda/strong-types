import KVPRule from '../rule/rule';
import KVPRuleFn from '../rule/fn';
import KVPRuleModifiers from '../rule/modifiers';
import KVPRuleNode from '../rule/node';
import KVPRuleNodeType from '../rule/node-type';

type KVPOpEqualTo<CallerType> = (a: any) => CallerType;
export default KVPOpEqualTo;

const equalToFn = (curr: any, target: any): boolean => {
	if (typeof target === 'undefined' || typeof curr === 'undefined') {
		return false;
	}

	if (Array.isArray(curr) && Array.isArray(target)) {
		if (curr.length !== target.length) {
			return false;
		}

		// Naive check for equality. Will produce false negative
		// if the arrays have the same contents in a different order.
		for (let i = 0; i < curr.length; i++) {
			if (curr[i] !== target[i]) {
				return false;
			}
		}

		return true;
	}

	return curr === target;
};

export function createEqualTo<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpEqualTo<CallerType> {
	function equalTo(target: any): CallerType {
		const fn: KVPRuleFn = (curr: any): boolean => {
			const result = equalToFn(curr, target);

			if (mods.invert) {
				return !result;
			}

			return result;
		};
		const node = new KVPRuleNode('EQUAL_TO', KVPRuleNodeType.CMP, fn);
		rule.add(node);
		return caller;
	}

	return equalTo;
}
