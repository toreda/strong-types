import KVP, {KVPNullable, createKVP, createKVPNullable} from './kvp';

import KVPRules from './rules';

type KVPUInt = KVP<number>;
export default KVPUInt;

export type KVPUIntNullable = KVPNullable<number>;

export function createKVPUInt(initial: number | null, fallback: number): KVPUInt {
	const rules = new KVPRules<number>();

	rules.add().must.match.type.integer();
	rules.add().must.be.greaterThanOrEqualTo(0);

	return createKVP<number>(initial, fallback, rules);
}

export function createKVPUIntNullable(initial: number | null, fallback: number): KVPUIntNullable {
	const rules = new KVPRules();
	return createKVPNullable<number>(initial, fallback, rules);
}
