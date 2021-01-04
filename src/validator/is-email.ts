import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsEmail<CallerType> = () => CallerType;

function isEmail(currValue: string): boolean {
	if (typeof currValue !== 'string') {
		return false;
	}

	if (!currValue.trim()) {
		return false;
	}

	const pieces = currValue.split('@');
	if (pieces.length !== 2) {
		return false;
	}

	const name = pieces[0];
	const domain = pieces[1];

	if (domain.indexOf('.') === -1) {
		return false;
	}

	if (domain.length > 63) {
		return false;
	}

	if (!name.trim()) {
		return false;
	}

	return true;
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
