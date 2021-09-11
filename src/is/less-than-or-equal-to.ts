import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsLessThanOrEqualTo<CallerType> = (a: number) => CallerType;

export const lessThanOrEqualToFn = (curr: number, target: number): boolean => {
	if (typeof curr !== 'number' || typeof target !== 'number') {
		return false;
	}

	return curr <= target;
};

export function makeIsLessThanOrEqualTo<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsLessThanOrEqualTo<CallerType> {
	return (target: number): CallerType => {
		const ruleFn: RuleFn<number> = (curr: number) => {
			return lessThanOrEqualToFn(curr, target);
		};

		const node = new RuleNode('IS_LT_OR_EQT', RuleNodeType.CMP, ruleFn, mods.invert);
		rule.add(node);

		return caller;
	};
}
