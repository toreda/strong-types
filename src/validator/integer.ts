import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsInteger<CallerType> = () => CallerType;

const isInteger = (curr: number): boolean => {
	if (typeof curr !== 'number') {
		return false;
	}

	return Math.floor(curr) === curr;
};

export function createIsInteger<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsInteger<CallerType> {
	function int(): CallerType {
		const ruleFn: KVPRuleFn = (curr: number): boolean => {
			const result = isInteger(curr);

			if (mods.invert) {
				return !result;
			}

			return result;
		};

		const node = new KVPRuleNode('IS_INTEGER', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return int;
}
