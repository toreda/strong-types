import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsUndefined<CallerType> = () => CallerType;

function isUndefined(currValue: any): boolean {
	return typeof currValue === 'undefined';
}

export function createIsUndefined<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsUndefined<CallerType> {
	function beUndefined(): CallerType {
		const fn: KVPRuleFn = (curr: number) => {
			return isUndefined(curr);
		};

		const node = new KVPRuleNode('IS_UNDEFINED', KVPRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	}

	return beUndefined;
}
