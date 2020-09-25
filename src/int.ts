import KVP, {KVPNullable, createKVP, createKVPNullable} from './kvp';

import KVPRules from './rules';

type KVPInt = KVP<number>;
export default KVPInt;

export type KVPIntNullable = KVPNullable<number>;

export function createKVPInt(initial: number, fallback: number): KVPInt {
	const rules = new KVPRules();

	rules.add().must.match.type.integer();
	rules.add().must.be.lessThan(25);
	rules.add().must.be.greaterThan(20);
	rules.add().must.be.equalTo(24);
	rules.add().must.not.be.undefined();
	return createKVP<number>(initial, fallback, rules);
}

export function createKVPIntNullable(
	initial: number | null,
	fallback: number
): KVPIntNullable | null {
	const rules = new KVPRules();
	return createKVPNullable<number>(initial, fallback, rules);
}
