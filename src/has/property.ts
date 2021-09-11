import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type HasProperty<CallerType> = (propName: string) => CallerType;

function hasProperty(o: unknown, propName: string): boolean {
	if (typeof o === 'undefined' || o === null) {
		return false;
	}

	const obj = o as ObjectConstructor;
	if (!obj.hasOwnProperty || typeof obj.hasOwnProperty !== 'function') {
		return false;
	}

	return obj.hasOwnProperty(propName);
}

export function makeHasProperty<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): HasProperty<CallerType> {
	return (propName: string): CallerType => {
		const fn: RuleFn<unknown> = (obj: unknown) => {
			return hasProperty(obj, propName);
		};

		const node = new RuleNode('HAS_PROPERTY', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
