import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

type KVPOpGreaterThanOrEqualTo<CallerType> = (a: number) => CallerType;
export default KVPOpGreaterThanOrEqualTo;

const greaterThanOrEqualToFn = (curr: number, target: number): boolean => {
	return curr >= target;
};

export function createGreaterThanOrEqualTo<CallerType>(
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
