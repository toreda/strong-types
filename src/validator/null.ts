import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsNull<CallerType> = () => CallerType;

export function createIsNull<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsNull<CallerType> {
	return (): CallerType => {
		const fn: KVPRuleFn = (curr: any): boolean => {
			return curr === null;
		};

		const node = new KVPRuleNode('IS_NULL', KVPRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
