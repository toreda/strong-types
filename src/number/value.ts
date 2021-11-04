import {typeValue} from '../type/value';

export function numberValue(value: unknown, fallback: number): number {
	return typeValue<number>('number', value, fallback);
}
