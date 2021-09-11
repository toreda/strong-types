import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsNull<CallerType> = () => CallerType;

export function makeIsNull<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsNull<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<unknown | null> = (curr?: unknown | null): boolean => {
			return curr === null;
		};

		const node = new RuleNode<unknown | null>('IS_NULL', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
