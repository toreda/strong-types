import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

export type KVPOpLessThanOrEqualTo<CallerType> = (a: number) => CallerType;

const lessThanOrEqualToFn = (curr: number, target: number) => {
	return curr <= target;
};

export default function createLessThan<CallerType>(
	caller: CallerType,
	rule: KVPRule
): KVPOpLessThanOrEqualTo<CallerType> {
	function lessThanOrEqualTo(target: number): CallerType {
		const ruleFn: KVPRuleFn = (curr: number) => {
			return lessThanOrEqualToFn(curr, target);
		};

		const node = new KVPRuleNode('LESS_THAN_OR_EQUAL_TO', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return lessThanOrEqualTo;
}
