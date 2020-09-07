import {ArmorKVP, createKVP, createKVPNullable} from './kvp';

type ArmorBool = ArmorKVP<boolean>;
export default ArmorBool;

export function createKVPBool(initial: boolean, fallback: boolean, options: any): ArmorBool {
	return createKVP<boolean>(initial, fallback, options);
}

export function createKVPBoolNullable(initial: boolean | null, fallback: boolean, options: any): ArmorBool | null {
	return createKVPNullable<boolean>(initial, fallback, options);
}
