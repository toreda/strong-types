import {ArmorKVP, createKVP, createKVPNullable} from './kvp';

type ArmorUInt = ArmorKVP<number>;
export default ArmorUInt;

export function createKVPUInt(initial: number, fallback: number, options: any): ArmorUInt {
	return createKVP<number>(initial, fallback, options);
}

export function createKVPUIntNullable(initial: number | null, fallback: number, options: any): ArmorUInt | null {
	return createKVPNullable<number>(initial, fallback, options);
}
