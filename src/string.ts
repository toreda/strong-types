import { ArmorKVP, ArmorKVPNullable, createKVP, createKVPNullable } from './kvp';

type ArmorString = ArmorKVP<string>;
export default ArmorString;
export type ArmorStringNullable = ArmorKVPNullable<string>;

export function createKVPString(initial: string, fallback: string, options: any): ArmorString {
	return createKVP<string>(initial, fallback, options);
}

export function createKVPStringNullable(initial: string | null, fallback: string, options: any): ArmorStringNullable{
	return createKVPNullable<string>(initial, fallback, options);
}