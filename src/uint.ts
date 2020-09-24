import KVP, {KVPNullable, createKVP, createKVPNullable} from './kvp';

import KVPRules from './rules';
import KVPType from './type';

type KVPUInt = KVP<number>;
export default KVPUInt;

export type KVPUIntNullable = KVPNullable<number>;

export function createKVPUInt(initial: number, fallback: number): KVPUInt {
	const rules = new KVPRules();
	rules.must.match.type(KVPType.INT);
	rules.must.be.greaterThan(-1);
	return createKVP<number>(initial, fallback, rules);
}

export function createKVPUIntNullable(
	initial: number | null,
	fallback: number
): KVPUIntNullable {
	const rules = new KVPRules();
	return createKVPNullable<number>(initial, fallback, rules);
}
