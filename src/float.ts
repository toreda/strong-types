import ArmorKVP, {ArmorKVPNullable, createKVP, createKVPNullable} from './kvp';

type ArmorFloat = ArmorKVP<number>;
export default ArmorFloat;
export type ArmorFloatNullable = ArmorKVPNullable<number>;

export function createKVPFloat(initial: number, fallback: number, options: any): ArmorFloat {
	return createKVP<number>(initial, fallback, options);
}

export function createKVPFloatNullable(
	initial: number | null,
	fallback: number,
	options: any
): ArmorFloatNullable | null {
	return createKVPNullable<number>(initial, fallback, options);
}
