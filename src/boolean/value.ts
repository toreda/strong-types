import {typeValue} from '../type/value';

/**
 * Return `value` if it's a valid boolean, otherwise returns `fallback`.
 *
 * @param value
 * @param fallback
 * @returns
 *
 * @category Bool
 */
export function booleanValue(value: unknown, fallback: boolean): boolean {
	return typeValue<boolean>('boolean', value, fallback);
}
