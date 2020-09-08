import ArmorKVP, {ArmorKVPNullable, createKVP, createKVPNullable} from './kvp';

export type ArmorBool = ArmorKVP<boolean>;
export type ArmorBoolNullable = ArmorKVPNullable<boolean>;

export default ArmorBool;

export function createKVPBool(initial: boolean, fallback: boolean, options?: any): ArmorBool {
	return createKVP<boolean>(initial, fallback, options);
}

export function createKVPBoolNullable(initial: boolean | null, fallback: boolean, options?: any): ArmorBoolNullable | null {
	return createKVPNullable<boolean>(initial, fallback, options);
}
