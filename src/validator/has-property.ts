import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpHasProperty<CallerType> = (propName: string) => CallerType;

function hasProperty(obj: any, propName: string): boolean {
	if (typeof obj === 'undefined' || obj === null) {
		return false;
	}

	const prop = obj[propName];
	return typeof prop !== 'undefined';
}

export function makeHasProperty<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpHasProperty<CallerType> {
	return (propName: string): CallerType => {
		const fn: STRuleFn = (obj: any) => {
			return hasProperty(obj, propName);
		};

		const node = new STRuleNode('HAS_PROPERTY', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
