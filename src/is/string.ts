import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsString<CallerType> = () => CallerType;

export function makeIsString<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsString<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<unknown> = (curr: unknown): boolean => {
			return typeof curr === 'string';
		};

		const node = new RuleNode<unknown>('IS_T_STR', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
