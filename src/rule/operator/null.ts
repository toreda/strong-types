import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

type KVPOpIsNull<CallerType> = () => CallerType;
export default KVPOpIsNull;

function isNull(curr: any): boolean {
	return curr === null;
}

export function createIsNull<CallerType>(
	caller: CallerType,
	rule: KVPRule
): KVPOpIsNull<CallerType> {
	function beNull(): CallerType {
		const ruleFn: KVPRuleFn = (curr: any): boolean => {
			return isNull(curr);
		};

		const node = new KVPRuleNode('IS_NULL', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return beNull;
}
