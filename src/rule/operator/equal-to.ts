import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleModifiers from '../modifiers';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

type KVPOpEqualTo<CallerType> = (a: any) => CallerType;
export default KVPOpEqualTo;

const equalToFn = (curr: any, target: any): boolean => {
	if (typeof target === 'undefined' || typeof curr === 'undefined') {
		return false;
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
