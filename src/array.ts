import {ArmorKVP, createKVP, createKVPNullable} from './kvp';

export function createKVPArray<T>(initial: Array<T>, fallback: Array<T>, options: any): ArmorKVP<Array<T>> {
	return createKVP<Array<T>>(initial, fallback, options);
}

export function createKVPArrayNullable(
	initial: Array<T> | null,
	fallback: Array<T>,
	options: any
): ArmorKVP<Array<T>> | null {
	return createKVPNullable<Array<T>>(initial, fallback, options);
}
