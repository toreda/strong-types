import {ArmorKVP, createKVP, createKVPNullable} from './kvp';

type ArmorInt = ArmorKVP<number>;
export default ArmorInt;

export function createKVPInt(initial: number, fallback: number, options: any): ArmorInt {
	return createKVP<number>(initial, fallback, options);
}

export function createKVPIntNullable(initial: number | null, fallback: number, options: any): ArmorInt | null {
	return createKVPNullable<number>(initial, fallback, options);
}
