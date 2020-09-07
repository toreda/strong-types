import { ArmorKVP, createKVP, createKVPNullable } from './kvp';

type ArmorString = ArmorKVP<string>;
export default ArmorString;

export function createKVPString(initial: string, fallback: string, options: any): ArmorKVP<string> {
	return createKVP<string>(initial, fallback, options);
}

export function createKVPStringNullable(initial: string | null, fallback: string, options: any): ArmorKVP<string> | null {
	return createKVPNullable<string>(initial, fallback, options);
}