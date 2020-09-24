import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

export type KVPOpGreaterThanOrEqualTo<CallerType> = (a: number) => CallerType;

const greaterThanOrEqualToFn = (curr: number, target: number) => {
	return curr >= target;
};

export default function createGreaterThan<CallerType>(
	caller: CallerType,
	rule: KVPRule
): KVPOpGreaterThanOrEqualTo<CallerType> {
	function greaterThanOrEqualTo(target: number): CallerType {
		const ruleFn: KVPRuleFn = (curr: number) => {
			return greaterThanOrEqualToFn(curr, target);
		};

		const node = new KVPRuleNode('GREATER_THAN_OR_EQUAL_TO', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return greaterThanOrEqualTo;
}
