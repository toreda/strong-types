import KVPRule from '../rule/rule';
import KVPRuleFn from '../rule/fn';
import KVPRuleModifiers from '../rule/modifiers';
import KVPRuleNode from '../rule/node';
import KVPRuleNodeType from '../rule/node-type';

type KVPOpLessThan<CallerType> = (a: number) => CallerType;
export default KVPOpLessThan;

const lessThanFn = (curr: number, target: number): boolean => {
	return curr < target;
};

export function createLessThan<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpLessThan<CallerType> {
	function lessThan(target: number): CallerType {
		const ruleFn: KVPRuleFn = (curr: number) => {
			const result = lessThanFn(curr, target);

			if (mods.invert) {
				return !result;
			}

			return result;
		};

		const node = new KVPRuleNode('LESS_THAN', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return lessThan;
}
