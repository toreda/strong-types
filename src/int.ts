import KVP, {KVPNullable, createKVP, createKVPNullable} from './kvp';

import KVPRules from './rules';

type KVPInt = KVP<number>;
export default KVPInt;

export type KVPIntNullable = KVPNullable<number>;
const rules = new KVPRules();
rules.add().must.match.type.integer();

export function createKVPInt(initial: number, fallback: number): KVPInt {
	return createKVP<number>(initial, fallback, rules);
}

export function createKVPIntNullable(
	initial: number | null,
	fallback: number
): KVPIntNullable | null {
	return createKVPNullable<number>(initial, fallback, rules);
}
