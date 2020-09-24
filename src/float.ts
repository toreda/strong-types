import KVP, {KVPNullable, createKVP, createKVPNullable} from './kvp';

import KVPRules from './rules';

type KVPFloat = KVP<number>;
export default KVPFloat;
export type KVPFloatNullable = KVPNullable<number>;

export function createKVPFloat(initial: number, fallback: number): KVPFloat {
	const rules = new KVPRules();
	return createKVP<number>(initial, fallback, rules);
}

export function createKVPFloatNullable(
	initial: number | null,
	fallback: number
): KVPFloatNullable | null {
	const rules = new KVPRules();
	return createKVPNullable<number>(initial, fallback, rules);
}
