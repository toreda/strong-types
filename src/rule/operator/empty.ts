import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleModifiers from '../modifiers';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

type KVPOpIsEmpty<CallerType> = (a: any) => CallerType;
export default KVPOpIsEmpty;

const emptyFn = (curr: any[] | string): boolean => {
	if (!Array.isArray(curr) && typeof curr !== 'string') {
		return false;
	}

	if (typeof curr === 'string') {
		return curr === '';
	}

	return curr.length === 0;
};

export function createIsEmpty<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsEmpty<CallerType> {
	function empty(): CallerType {
		const ruleFn: KVPRuleFn = (curr: any[] | string): boolean => {
			const result = emptyFn(curr);
			if (mods.invert) {
				return !result;
			}

			return result;
		};

		const node = new KVPRuleNode('IS_EMPTY', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return empty;
}
