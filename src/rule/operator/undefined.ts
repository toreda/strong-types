import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

type KVPOpIsUndefined<CallerType> = () => CallerType;
export default KVPOpIsUndefined;

function isUndefined(currValue: any): boolean {
	return typeof currValue === 'undefined';
}

export function createIsUndefined<CallerType>(
	caller: CallerType,
	rule: KVPRule
): KVPOpIsUndefined<CallerType> {
	function beUndefined(): CallerType {
		const ruleFn: KVPRuleFn = (curr: number) => {
			return isUndefined(curr);
		};
		const node = new KVPRuleNode('IS_UNDEFINED', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return beUndefined;
}
