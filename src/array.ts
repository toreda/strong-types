import {KVP, KVPNB, createKVP, createKVPNB} from './kvp';

import {KVPRules} from './rules';

export type KVPArray<T> = KVP<T[]>;
export type KVPArrayNB<T> = KVPNB<T[]>;

export function createKVPArray<T>(initial: T[], fallback: T[]): KVPArray<T> {
	const rules = new KVPRules();
	return createKVP<T[]>(initial, fallback, rules);
}

export function createKVPArrayNB<T>(initial: T[] | null, fallback: T[]): KVPArrayNB<T> {
	const rules = new KVPRules();
	return createKVPNB<T[]>(initial, fallback, rules);
}
