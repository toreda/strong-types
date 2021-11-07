import {typeValue} from '../../type/value';

/**
 * Check if `value` is a valid number or null and return if true. Otherwise
 * returns `fallback`.
 * @param value
 * @param fallback
 * @returns
 *
 * @category Numbers
 */
export function numberNullValue(value: unknown, fallback: number | null): number | null {
	return typeValue<number | null>('number', value, fallback);
}
