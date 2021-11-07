import {typeValue} from '../../type/value';

/**
 * Check if `value` is a valid boolean and return it if so, otherwise
 * returns `fallback`.
 * @param value
 * @param fallback
 * @returns
 *
 * @category Bool
 */
export function booleanNullValue(value: unknown, fallback: boolean | null): boolean | null {
	return typeValue<boolean | null>('boolean', value, fallback);
}
