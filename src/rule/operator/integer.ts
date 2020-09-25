import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

type KVPOpIsInteger<CallerType> = () => CallerType;
export default KVPOpIsInteger;

const isInteger = (curr: number): boolean => {
	if (typeof curr !== 'number') {
		return false;
	}

	return Math.floor(curr) === curr;
};

export function createIsInteger<CallerType>(
	caller: CallerType,
	rule: KVPRule
): KVPOpIsInteger<CallerType> {
	function int(): CallerType {
		const ruleFn: KVPRuleFn = (curr: number): boolean => {
			return isInteger(curr);
		};

		const node = new KVPRuleNode('IS_INTEGER', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return int;
}
