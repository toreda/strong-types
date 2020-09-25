import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleModifiers from '../modifiers';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

type KVPOpLessThanOrEqualTo<CallerType> = (a: number) => CallerType;
export default KVPOpLessThanOrEqualTo;

const lessThanOrEqualToFn = (curr: number, target: number): boolean => {
	return curr <= target;
};

export function createLessThanOrEqualTo<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpLessThanOrEqualTo<CallerType> {
	function lessThanOrEqualTo(target: number): CallerType {
		const ruleFn: KVPRuleFn = (curr: number) => {
			const result = lessThanOrEqualToFn(curr, target);

			if (mods.invert) {
				return !result;
			}

			return result;
		};

		const node = new KVPRuleNode('LESS_THAN_OR_EQUAL_TO', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return lessThanOrEqualTo;
}
