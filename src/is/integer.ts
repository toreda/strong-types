import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsInteger<CallerType> = () => CallerType;

export const isInteger = (curr: number): boolean => {
	if (typeof curr !== 'number') {
		return false;
	}

	return Math.floor(curr) === curr;
};

export function makeIsInteger<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsInteger<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<number> = (curr: number): boolean => {
			return isInteger(curr);
		};

		const node = new RuleNode<number>('IS_T_INT', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
