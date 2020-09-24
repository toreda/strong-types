import KVP, {KVPNullable, createKVP, createKVPNullable} from './kvp';

import KVPRules from './rules';

type KVPInt = KVP<number>;
export default KVPInt;

export type KVPIntNullable = KVPNullable<number>;

export function createKVPInt(initial: number, fallback: number): KVPInt {
	const rules = new KVPRules();
	rules.must.match.type('aaa');
	rules.must.match.types(['aaa', 'bbbb', 'ccc']);
	rules.must.be.lessThan(25);
	rules.must.be.greaterThan(20);
	rules.must.be.equalTo(24);
	rules.must.not.be.undefined();

	return createKVP<number>(initial, fallback, rules);
}

export function createKVPIntNullable(initial: number | null, fallback: number): KVPIntNullable | null {
	const rules = new KVPRules();
	return createKVPNullable<number>(initial, fallback, rules);
}
