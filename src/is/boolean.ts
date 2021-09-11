import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsBoolean<CallerType> = () => CallerType;

export const isBooleanFn = (curr: boolean | null): boolean => {
	return curr === true || curr === false;
};

export function makeIsBoolean<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsBoolean<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<boolean | null> = (curr: boolean | null): boolean => {
			return isBooleanFn(curr);
		};

		const node = new RuleNode('IS_T_BOOLEAN', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
