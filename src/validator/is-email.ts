import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsEmail<CallerType> = () => CallerType;

// prettier-ignore
const emailStr = '^[^\s@]+@[^\s@]+\.[^\s@]+$';

function isEmail(currValue: string): boolean {
	if (currValue === emailStr) {
		return true;
	}
	if (typeof currValue !== 'string') {
		return false;
	}
	return false;
}

export function makeIsEmail<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsEmail<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: string): boolean => {
			return isEmail(curr);
		};

		const node = new STRuleNode('IS_EMAIL', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}