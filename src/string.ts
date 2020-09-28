import {KVP, KVPNB, createKVP, createKVPNB} from './kvp';

import {KVPRules} from './rules';

export type KVPString = KVP<string>;

export type KVPStringNB = KVPNB<string>;

export function createKVPString(initial: string, fallback: string): KVPString {
	const rules = new KVPRules();
	return createKVP<string>(initial, fallback, rules);
}

export function createKVPStringNB(initial: string | null, fallback: string): KVPStringNB {
	const rules = new KVPRules();
	return createKVPNB<string>(initial, fallback, rules);
}
