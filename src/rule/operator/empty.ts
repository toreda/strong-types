import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

const emptyFn = (curr: any[] | number) => {
	if (!Array.isArray(curr) && typeof curr !== 'number') {
		return false;
	}

	if (typeof curr === 'number') {
		return curr === 0;
	}

	return curr.length === 0;
};

export type KVPOpEmpty<CallerType> = (a: any) => CallerType;

export default function createEmpty<CallerType>(
	caller: CallerType,
	rule: KVPRule
): KVPOpEmpty<CallerType> {
	function empty(): CallerType {
		const ruleFn: KVPRuleFn = (curr: any[] | number): boolean => {
			return emptyFn(curr);
		};
		const node = new KVPRuleNode(KVPRuleNodeType.COMPARISON, ruleFn);
		rule.add(node);

		return caller;
	}

	return empty;
}
