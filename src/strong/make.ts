import {Rules} from '../rules';
import {Strong} from '../strong';
import {createType} from '../create/type';
import {initialValue} from '../initial/value';

export function strongMake<ValueT>(
	fallback: ValueT,
	value?: ValueT | null,
	rules?: Rules<ValueT>
): Strong<ValueT> {
	const rulesValue = rules instanceof Rules ? rules : new Rules();

	return createType<ValueT>(fallback, initialValue(value), rulesValue, 'StrongType');
}
