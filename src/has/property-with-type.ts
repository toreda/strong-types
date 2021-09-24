import {BaseObject} from '../base/object';
import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

/**
 * Type signature for hasPropertyWithType validators used in rule chains.
 *
 * @category Validators
 */
export type HasPropertyWithType<CallerT> = (propName: string, typeName: string) => CallerT;

/**
 *
 * @param o
 * @param propName
 * @param typeName
 * @returns
 *
 * @category Validators
 */
export function hasPropertyWithType(o: unknown, propName: string, typeName: string): boolean {
	if (typeof propName !== 'string' || typeName !== 'string') {
		return false;
	}

	if (typeof o === 'undefined' || o === null) {
		return false;
	}

	if (!propName.trim() || !typeName.trim()) {
		return false;
	}

	const obj = o as BaseObject;

	if (typeof obj.hasOwnProperty !== 'function' || !obj.hasOwnProperty(propName)) {
		return false;
	}

	return typeof obj[propName] === typeName;
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
export function hasPropertyWithTypeMake<CallerT>(
	caller: CallerT,
	rule: Rule,
	mods: RuleMods
): HasPropertyWithType<CallerT> {
	return (propName, typeName): CallerT => {
		const fn: RuleFn<unknown> = (obj: unknown): boolean => {
			return hasPropertyWithType(obj, propName, typeName);
		};

		const node = new RuleNode<unknown>('HAS_PROP_W_TYPE', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
