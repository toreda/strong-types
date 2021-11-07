import {typeValue} from '../type/value';

/**
 * Test and return value if it's number, otherwise return fallback.
 * Guarantees number return type without additional checks.
 * @param value
 * @param fallback
 * @returns
 *
 * @category Numbers
 */
export function numberValue(value: unknown, fallback: number): number {
	return typeValue<number>('number', value, fallback);
}
