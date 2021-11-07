import {typeValue} from '../../type/value';

/**
 * Check if `value` is a valid string and return it if so, otherwise
 * returns `fallback`.
 * @param value
 * @param fallback
 * @returns
 *
 * @category Strings
 */
export function stringNullValue(value: unknown, fallback: string | null): string | null {
	return typeValue<string | null>('string', value, fallback);
}
