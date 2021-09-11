import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsDouble<CallerType> = () => CallerType;

export const isDouble = (curr: number): boolean => {
	if (typeof curr !== 'number') {
		return false;
	}

	if (isNaN(curr)) {
		return false;
	}

	return true;
};

export function makeIsDouble<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsDouble<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<number> = (curr: number): boolean => {
			return isDouble(curr);
		};

		const node = new RuleNode<number>('IS_T_DOUBLE', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
