import {BaseObject} from '../base/object';
import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

/**
 * Type signature for hasProperty validators used in rule chains.
 *
 * @category Validators
 */
export type HasProperty<CallerType> = (propName: string) => CallerType;

/**
 *
 * @param o
 * @param propName
 * @returns
 *
 * @category Validators
 */
function hasProperty(o: unknown, propName: string): boolean {
	if (typeof o === 'undefined' || o === null) {
		return false;
	}

	const obj = o as BaseObject;
	return typeof obj[propName] !== 'undefined';
}

/**
 *
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validators
 */
export function makeHasProperty<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): HasProperty<CallerType> {
	return (propName: string): CallerType => {
		const fn: RuleFn<unknown> = (obj: unknown) => {
			return hasProperty(obj, propName);
		};

		const node = new RuleNode<unknown>('HAS_PROPERTY', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
