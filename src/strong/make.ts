import {Rules} from '../rules';
import {Strong} from '../strong';
import {createType} from '../create/type';
import {initialValue} from '../initial/value';

/**
 * Create Strong object using provided arguments. Should generally be called
 * by helper functions or factories which create the desired type and pass in
 * type rules consistently.
 * @param fallback		Value returned when type's current `value` is null.
 * @param initial		(Optional) Initial value for type. When not provided, type's
 *						initial value is `fallback` instead. When reset is called, value
 *						is automatically set to initial if it was provided, or fallback if not.
 * @param rules			Automatic type validation rules applied to any value used with `set`.
 * @returns
 *
 * @category Core
 */
export function strongMake<ValueT>(
	fallback: ValueT,
	initial?: ValueT | null,
	rules?: Rules<ValueT>
): Strong<ValueT> {
	const rulesValue = rules instanceof Rules ? rules : new Rules();

	return createType<ValueT>(fallback, initialValue(initial), rulesValue, 'StrongType');
}
