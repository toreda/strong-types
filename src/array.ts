import KVP, {KVPNullable, createKVP, createKVPNullable} from './kvp';

import {KVPRules} from './rules';

export type KVPArray<T> = KVP<T[]>;
export type KVPArrayNullable<T> = KVPNullable<T[]>;

export function createKVPArray<T>(initial: T[], fallback: T[]): KVPArray<T> {
	const rules = new KVPRules();
	return createKVP<T[]>(initial, fallback, rules);
}

export function createKVPArrayNullable<T>(initial: T[] | null, fallback: T[]): KVPArrayNullable<T> {
	const rules = new KVPRules();
	//rules.add().must.match.typ
	return createKVPNullable<T[]>(initial, fallback, rules);
}
