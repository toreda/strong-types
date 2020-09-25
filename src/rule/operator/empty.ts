import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleModifiers from '../modifiers';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

type KVPOpIsEmpty<CallerType> = (a: any) => CallerType;
export default KVPOpIsEmpty;

const emptyFn = (curr: any[] | number): boolean => {
	if (!Array.isArray(curr) && typeof curr !== 'number') {
		return false;
	}

	if (typeof curr === 'number') {
		return curr === 0;
	}

	return curr.length === 0;
};

export function createIsEmpty<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsEmpty<CallerType> {
	function empty(): CallerType {
		const ruleFn: KVPRuleFn = (curr: any[] | number): boolean => {
			return emptyFn(curr);
		};

		const node = new KVPRuleNode('IS_EMPTY', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return empty;
}
