import {typeValue} from '../type/value';

/**
 * Check if `value` is a valid string and return it if so, otherwise
 * returns `fallback`.
 * @param value
 * @param fallback
 * @returns
 *
 * @category Strings
 */
export function stringValue(value: unknown, fallback: string): string {
	return typeValue<string>('string', value, fallback);
}
