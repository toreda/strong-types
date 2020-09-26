import KVPRule from '../rule/rule';
import KVPRuleFn from '../rule/fn';
import KVPRuleModifiers from '../rule/modifiers';
import KVPRuleNode from '../rule/node';
import KVPRuleNodeType from '../rule/node-type';

type KVPOpHaveLength<CallerType> = (a: number) => CallerType;
export default KVPOpHaveLength;

const haveLengthFn = (curr: any, expectedLength: number) => {
	if (!Array.isArray(curr) && typeof curr !== 'number' && typeof curr !== 'string') {
		return false;
	}

	if (typeof curr === 'string') {
		return curr.length === expectedLength;
	}

	if (typeof curr === 'number') {
		return curr === expectedLength;
	}

	return curr.length === expectedLength;
};

export function createHaveLength<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpHaveLength<CallerType> {
	function haveLength(expectedLength: number): CallerType {
		const ruleFn: KVPRuleFn = (curr: any): boolean => {
			return haveLengthFn(curr, expectedLength);
		};

		const node = new KVPRuleNode('HAS_LENGTH', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return haveLength;
}