import {typeValue} from '../type/value';

export function booleanValue(value: unknown, fallback: boolean): boolean {
	return typeValue<boolean>('boolean', value, fallback);
}
