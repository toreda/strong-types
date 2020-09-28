import {KVP, KVPNB, createKVP, createKVPNB} from './kvp';

import {KVPRules} from './rules';

export type KVPInt = KVP<number>;
export type KVPIntNB = KVPNB<number>;
const rules = new KVPRules();
rules.add().must.match.type.integer();

export function createKVPInt(initial: number | null, fallback: number): KVPInt {
	return createKVP<number>(initial, fallback, rules);
}

export function createKVPIntNB(initial: number | null, fallback: number): KVPIntNB | null {
	return createKVPNB<number>(initial, fallback, rules);
}
