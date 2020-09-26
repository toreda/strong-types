import KVPRule from '../rule/rule';
import KVPRuleFn from '../rule/fn';
import KVPRuleModifiers from '../rule/modifiers';
import KVPRuleNode from '../rule/node';
import KVPRuleNodeType from '../rule/node-type';

type KVPOpGreaterThanOrEqualTo<CallerType> = (a: number) => CallerType;
export default KVPOpGreaterThanOrEqualTo;

const greaterThanOrEqualToFn = (curr: number, target: number): boolean => {
	if (typeof curr !== 'number' || typeof target !== 'number') {
		return false;
	}

	return curr >= target;
};

export function createGreaterThanOrEqualTo<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpGreaterThanOrEqualTo<CallerType> {
	function greaterThanOrEqualTo(target: number): CallerType {
		const ruleFn: KVPRuleFn = (curr: number) => {
			const result = greaterThanOrEqualToFn(curr, target);

			if (mods.invert) {
				return !result;
			}

			return result;
		};

		const node = new KVPRuleNode('GREATER_THAN_OR_EQUAL_TO', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return greaterThanOrEqualTo;
}
