import {ArmorKVP, ArmorKVPNullable, createKVP, createKVPNullable} from './kvp';

type ArmorArray<T> = ArmorKVP<Array<T>>;
export default ArmorArray;
export type ArmorArrayNullable<T> = ArmorKVPNullable<Array<T>>;

export function createKVPArray<T>(initial: Array<T>, fallback: Array<T>, options: any): ArmorArray<T> {
	return createKVP<Array<T>>(initial, fallback, options);
}

export function createKVPArrayNullable<T>(
	initial: Array<T> | null,
	fallback: Array<T>,
	options: any
): ArmorArrayNullable<T> {
	return createKVPNullable<Array<T>>(initial, fallback, options);
}
