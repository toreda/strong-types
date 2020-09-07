import {ArmorKVP, createKVP, createKVPNullable} from './kvp';

type ArmorFloat = ArmorKVP<number>;
export default ArmorFloat;

export function createKVPFloat(initial: number, fallback: number, options: any): ArmorKVP<number> {
	return createKVP<number>(initial, fallback, options);
}

export function createKVPFloatNullable(
	initial: number | null,
	fallback: number,
	options: any
): ArmorKVP<number> | null {
	return createKVPNullable<number>(initial, fallback, options);
}
