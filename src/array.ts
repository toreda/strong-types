import KVPKVP, {KVPNullable, createKVP, createKVPNullable} from './kvp';

import KVPRules from './rules';

type KVPArray<T> = KVPKVP<Array<T>>;
export default KVPArray;
export type KVPArrayNullable<T> = KVPNullable<Array<T>>;

export function createKVPArray<T>(initial: Array<T>, fallback: Array<T>): KVPArray<T> {
	const rules = new KVPRules();
	return createKVP<Array<T>>(initial, fallback, rules);
}

export function createKVPArrayNullable<T>(
	initial: Array<T> | null,
	fallback: Array<T>,
	options: any
): KVPArrayNullable<T> {
	const rules = new KVPRules();
	return createKVPNullable<Array<T>>(initial, fallback, rules);
}
