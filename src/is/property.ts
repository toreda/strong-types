import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsProperty<CallerType> = (propName: string) => CallerType;

function hasProperty(curr: any, propName: string): boolean {
	if (typeof curr === 'undefined' || curr === null) {
		return false;
	}

	const prop = curr[propName];
	return typeof prop !== 'undefined';
}

export function makeHasProperty<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsProperty<CallerType> {
	return (propName: string): CallerType => {
		const fn: RuleFn<unknown> = (curr: unknown) => {
			return hasProperty(curr, propName);
		};

		const node = new RuleNode<unknown>('IS_PROPERTY', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
