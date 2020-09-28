import {KVP, KVPNB, createKVP, createKVPNB} from './kvp';

import {KVPRules} from './rules';

export type KVPDouble = KVP<number>;

export type KVPDoubleNB = KVPNB<number>;

export function createKVPDouble(initial: number | null, fallback: number): KVPDouble {
	const rules = new KVPRules<number>();

	rules.add().must.match.type.double();

	return createKVP<number>(initial, fallback, rules);
}

export function createKVPDoubleNB(initial: number | null, fallback: number): KVPDoubleNB {
	const rules = new KVPRules();
	rules.add().must.match.type.double();

	return createKVPNB<number>(initial, fallback, rules);
}
