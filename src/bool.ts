import {KVP, KVPNB, createKVP, createKVPNB} from './kvp';

import {KVPRules} from './rules';

export type KVPBool = KVP<boolean>;
export type KVPBoolNB = KVPNB<boolean>;

export function createKVPBool(initial: boolean | null, fallback: boolean): KVPBool {
	const rules = new KVPRules();
	rules.add().must.match.type.integer();

	return createKVP<boolean>(initial, fallback, rules);
}

export function createKVPBoolNB(initial: boolean | null, fallback: boolean): KVPBoolNB {
	const rules = new KVPRules();
	rules.add().must.match.type.boolean();
	return createKVPNB<boolean>(initial, fallback, rules);
}
