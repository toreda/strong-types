import {KVPData} from './data';
import {KVPRules} from './rules';

export interface KVP<T> {
	(val?: T | null): T;
	get: (fallback: T) => T;
	getNullable: () => T | null;
	reset: () => void;
}

export interface KVPNB<T> {
	(val?: T | null): T | null;
	get: (fallback: T) => T;
	reset: () => void;
}

export function createKVP<T>(initialValue: T | null, fallbackArg: T, rules?: KVPRules<T>): KVP<T> {
	const instance = new KVPData<T>(initialValue, fallbackArg, rules);

	const localFallback = fallbackArg !== undefined ? fallbackArg : instance.fallbackDefault;

	const helper: KVP<T> = Object.assign(
		(val?: T): T => {
			if (typeof val !== 'undefined') {
				instance.set(val);

				if (val === null) {
					return instance.fallbackDefault;
				}
				return val;
			}

			return instance.get(localFallback);
		},
		{
			get: (fallback: T): T => {
				return instance.get(fallback);
			},
			getNullable: (): T | null => {
				return instance.getNullable();
			},
			reset: (): void => {
				instance.reset();
			}
		}
	);

	return helper;
}

export function createKVPNB<T>(initial: T | null, fallbackArg: T, rules?: KVPRules<T>): KVPNB<T> {
	const instance = new KVPData<T>(initial, fallbackArg, rules);

	const helper: KVPNB<T> = Object.assign(
		(val?: T): T | null => {
			if (typeof val !== 'undefined') {
				instance.set(val);
				return initial;
			}

			return instance.getNullable();
		},
		{
			get: (fallback: T): T => {
				return instance.get(fallback);
			},
			reset: () => {
				instance.reset();
			}
		}
	);

	return helper;
}
