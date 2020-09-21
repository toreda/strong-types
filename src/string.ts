import KVP, {KVPNullable, createKVP, createKVPNullable} from './kvp';

import KVPRules from './rules';

type KVPString = KVP<string>;
export default KVPString;
export type KVPStringNullable = KVPNullable<string>;

export function createKVPString(initial: string, fallback: string): KVPString {
	const rules = new KVPRules();
	return createKVP<string>(initial, fallback, rules);
}

export function createKVPStringNullable(initial: string | null, fallback: string): KVPStringNullable {
	const rules = new KVPRules();
	return createKVPNullable<string>(initial, fallback, rules);
}
