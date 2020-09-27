import KVPRule from '../rule/rule';
import KVPRuleFn from '../rule/fn';
import KVPRuleModifiers from '../rule/modifiers';
import KVPRuleNode from '../rule/node';
import KVPRuleNodeType from '../rule/node-type';

type KVPOpIsDouble<CallerType> = () => CallerType;
export default KVPOpIsDouble;

const isDouble = (curr: number): boolean => {
	if (typeof curr !== 'number') {
		return false;
	}

	if (isNaN(curr)) {
		return false;
	}

	return true;
};

export function createIsDouble<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsDouble<CallerType> {
	function int(): CallerType {
		const ruleFn: KVPRuleFn = (curr: number): boolean => {
			const result = isDouble(curr);

			if (mods.invert) {
				return !result;
			}

			return result;
		};

		const node = new KVPRuleNode('IS_DOUBLE', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return int;
}
