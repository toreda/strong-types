import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleModifiers from '../modifiers';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

type KVPOpIsUndefined<CallerType> = () => CallerType;
export default KVPOpIsUndefined;

function isUndefined(currValue: any): boolean {
	return typeof currValue === 'undefined';
}

export function createIsUndefined<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsUndefined<CallerType> {
	function beUndefined(): CallerType {
		const ruleFn: KVPRuleFn = (curr: number) => {
			const result = isUndefined(curr);

			if (mods.invert) {
				return !result;
			}

			return result;
		};
		const node = new KVPRuleNode('IS_UNDEFINED', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return beUndefined;
}
