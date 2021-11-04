import {typeValue} from '../type/value';

export function stringValue(value: unknown, fallback: string): string {
	return typeValue<string>('string', value, fallback);
}
