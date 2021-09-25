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
export type HasProperty<CallerT> = (propName: string) => CallerT;

/**
 *
 * @param o
 * @param propName
 * @returns
 *
 * @category Validators
 */
export function hasProperty(o: unknown, propName: string): boolean {
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
 * @category Validator Factory
 */
export function hasPropertyMake<CallerT>(caller: CallerT, rule: Rule, mods: RuleMods): HasProperty<CallerT> {
	return (propName: string): CallerT => {
		const fn: RuleFn<unknown> = (obj: unknown) => {
			return hasProperty(obj, propName);
		};

		const node = new RuleNode<unknown>('HAS_PROPERTY', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
