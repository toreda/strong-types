import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleModifiers from '../modifiers';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

type KVPOpIsNull<CallerType> = () => CallerType;
export default KVPOpIsNull;

function isNull(curr: any): boolean {
	return curr === null;
}

export function createIsNull<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsNull<CallerType> {
	function beNull(): CallerType {
		const ruleFn: KVPRuleFn = (curr: any): boolean => {
			const result = isNull(curr);

			if (mods.invert) {
				return !result;
			}

			return result;
		};

		const node = new KVPRuleNode('IS_NULL', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return beNull;
}
