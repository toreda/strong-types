import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleModifiers from '../modifiers';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

type KVPOpLessThan<CallerType> = (a: number) => CallerType;
export default KVPOpLessThan;

const lessThanFn = (curr: number, target: number): boolean => {
	return curr < target;
};

export function createLessThan<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpLessThan<CallerType> {
	function lessThan(target: number): CallerType {
		const ruleFn: KVPRuleFn = (curr: number) => {
			const result = lessThanFn(curr, target);

			if (mods.invert) {
				return !result;
			}

			return result;
		};

		const node = new KVPRuleNode('LESS_THAN', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return lessThan;
}
