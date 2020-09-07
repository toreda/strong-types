import {ArmorKVP, ArmorKVPNullable, createKVP, createKVPNullable} from './kvp';

type ArmorUInt = ArmorKVP<number>;
export default ArmorUInt;

export type ArmorUIntNullable = ArmorKVPNullable<number>;

export function createKVPUInt(initial: number, fallback: number, options: any): ArmorUInt {
	return createKVP<number>(initial, fallback, options);
}

export function createKVPUIntNullable(initial: number | null, fallback: number, options: any): ArmorUIntNullable {
	return createKVPNullable<number>(initial, fallback, options);
}
