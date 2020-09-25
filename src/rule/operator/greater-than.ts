import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleModifiers from '../modifiers';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

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
