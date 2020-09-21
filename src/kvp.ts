import KVPData from './data';
import KVPRules from './rules';

interface KVP<T> {
	(val?: T | null): T;
	get: (fallback: T) => T;
	getNullable: () => T | null;
	reset: () => void;
}

export default KVP;

export interface KVPNullable<T> {
	(val?: T | null): T | null;
	get: (fallback: T) => T;
	reset: () => void;
}

export function createKVP<T>(initialArg: T | null, fallbackArg: T, rules?: KVPRules): KVP<T> {
	const instance = new KVPData<T>(initialArg, fallbackArg, rules);

	const helper: KVP<T> = Object.assign(
		(val?: T): T => {
			const fallback = typeof fallbackArg !== 'undefined' ? fallbackArg : instance.fallbackDefault;

			if (typeof val !== 'undefined') {
				instance.set(val);

				if (val === null) {
					return instance.fallbackDefault;
				}
				return val;
			}

			return instance.get(fallback);
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

export function createKVPNullable<T>(initial: T | null, fallback: T, rules?: KVPRules): KVPNullable<T> {
	const instance = new KVPData<T>(initial, fallback, rules);

	const helper: KVPNullable<T> = Object.assign(
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
