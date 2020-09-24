import KVPKVP, {KVPNullable, createKVP, createKVPNullable} from './kvp';

import KVPOptions from './options';
import KVPRules from './rules';
import KVPType from './type';

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
	options?: KVPOptions
): KVPArrayNullable<T> {
	const rules = new KVPRules();
	rules.must.match.type(KVPType.ARRAY);
	return createKVPNullable<T[]>(initial, fallback, rules);
}
