import {KVP, KVPNB, createKVP, createKVPNB} from './kvp';

import {KVPRules} from './rules';

export type KVPUInt = KVP<number>;

export type KVPUIntNB = KVPNB<number>;

export function createKVPUInt(initial: number | null, fallback: number): KVPUInt {
	const rules = new KVPRules<number>();

	rules.add().must.match.type.integer();
	rules.add().must.be.greaterThanOrEqualTo(0);

	return createKVP<number>(initial, fallback, rules);
}

export function createKVPUIntNB(initial: number | null, fallback: number): KVPUIntNB {
	const rules = new KVPRules();
	return createKVPNB<number>(initial, fallback, rules);
}
