import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsArray<CallerType> = () => CallerType;

export function makeIsArray<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsArray<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<unknown[]> = (curr: unknown[]): boolean => {
			return Array.isArray(curr);
		};

		const node = new RuleNode<unknown[]>('IS_T_ARRAY', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
