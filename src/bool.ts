import KVP, {KVPNullable, createKVP, createKVPNullable} from './kvp';

import {KVPRuleModifiers} from './rule/modifiers';
import {KVPRules} from './rules';

export type KVPBool = KVP<boolean>;
export type KVPBoolNullable = KVPNullable<boolean>;

export function createKVPBool(initial: boolean, fallback: boolean): KVPBool {
	const rules = new KVPRules();
	rules.add().must.match.type.integer();
	//rules.add().must.match.type('boolean').or.type('array');

	return createKVP<boolean>(initial, fallback, rules);
}

export function createKVPBoolNullable(
	initial: boolean | null,
	fallback: boolean
): KVPBoolNullable | null {
	const rules = new KVPRules();
	return createKVPNullable<boolean>(initial, fallback, rules);
}
