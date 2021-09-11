import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsUndefined<CallerType> = () => CallerType;

function isUndefined(currValue: unknown): boolean {
	return typeof currValue === 'undefined';
}

export function makeIsUndefined<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsUndefined<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<unknown | undefined> = (curr: unknown): boolean => {
			return isUndefined(curr);
		};

		const node = new RuleNode<unknown | undefined>('IS_T_UNDEFINED', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
