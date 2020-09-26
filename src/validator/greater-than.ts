import KVPRule from '../rule/rule';
import KVPRuleFn from '../rule/fn';
import KVPRuleModifiers from '../rule/modifiers';
import KVPRuleNode from '../rule/node';
import KVPRuleNodeType from '../rule/node-type';

type KVPOpGreaterThan<CallerType> = (target: number) => CallerType;
export default KVPOpGreaterThan;

const greaterThanFn = (curr: number, target: number): boolean => {
	return curr > target;
};

export function createGreaterThan<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpGreaterThan<CallerType> {
	function greaterThan(target: number): CallerType {
		const ruleFn: KVPRuleFn = (curr: number) => {
			const result = greaterThanFn(curr, target);

			if (mods.invert) {
				return !result;
			}

			return result;
		};

		const node = new KVPRuleNode('GREATER_THAN', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return greaterThan;
}
