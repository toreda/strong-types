import KVPKVP, {KVPNullable, createKVP, createKVPNullable} from './kvp';

import KVPRules from './rules';

type KVPArray<T> = KVPKVP<T[]>;
export default KVPArray;
export type KVPArrayNullable<T> = KVPNullable<T[]>;

export function createKVPArray<T>(initial: T[], fallback: T[]): KVPArray<T> {
	const rules = new KVPRules();
	return createKVP<T[]>(initial, fallback, rules);
}

export function createKVPArrayNullable<T>(
	initial: T[] | null,
	fallback: T[],
	options: any
): KVPArrayNullable<T> {
	const rules = new KVPRules();
	return createKVPNullable<T[]>(initial, fallback, rules);
}
