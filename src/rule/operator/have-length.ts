import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleModifiers from '../modifiers';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';

type KVPOpHaveLength<CallerType> = (a: any) => CallerType;
export default KVPOpHaveLength;

const haveLengthFn = (curr: any[] | number, expectedLength: number) => {
	if (!Array.isArray(curr) && typeof curr !== 'number') {
		return false;
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
		const ruleFn: KVPRuleFn = (curr: any[] | number): boolean => {
			return haveLengthFn(curr, expectedLength);
		};

		const node = new KVPRuleNode('HAS_LENGTH', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return haveLength;
}
