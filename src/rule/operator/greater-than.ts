import KVPRule from '../rule';
import KVPRuleFn from '../chain-fn';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

export type KVPOpGreaterThan<CallerType> = (target: number) => CallerType;

const greaterThanFn = (curr: number, target: number): boolean => {
	return curr > target;
};

export default function createGreaterThan<CallerType>(
	caller: CallerType,
	rule: KVPRule
): KVPOpGreaterThan<CallerType> {
	function greaterThan(target: number): CallerType {
		const ruleFn: KVPRuleFn = (curr: number) => {
			return greaterThanFn(curr, target);
		};

		const node = new KVPRuleNode('GREATER_THAN', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return greaterThan;
}
