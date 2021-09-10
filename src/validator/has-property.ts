import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpHasProperty<CallerType> = (propName: string) => CallerType;

function hasProperty(o: unknown, propName: string): boolean {
	if (typeof o === 'undefined' || o === null) {
		return false;
	}

	if (!o.hasOwnProperty || typeof o.hasOwnProperty !== 'function') {
		return false;
	}

	const prop = o.hasOwnProperty(propName);

	return prop === true;
}

export function makeHasProperty<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpHasProperty<CallerType> {
	return (propName: string): CallerType => {
		const fn: STRuleFn<unknown> = (obj: unknown) => {
			return hasProperty(obj, propName);
		};

		const node = new STRuleNode('HAS_PROPERTY', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
