import {ArmorInt, ArmorUInt} from './types';

import {ArmorKVPData} from './data';
import {ArmorKVPOptions} from './options';

export type ArmorKVP<T> = (val?: T, fallback?: T) => T;
export type ArmorKVPNullable<T> = (val?: T | null, fallback?: T) => T | null;

export function createKVP<T>(initial: T | null, fallback: T, options?: ArmorKVPOptions<T>): ArmorKVP<T> {
	const instance = new ArmorKVPData<T>(initial, fallback, options);

	const helper: ArmorKVP<T> = (val?: T | null, fallback?: T): T => {
		const fallbackVal = typeof fallback !== 'undefined' ? fallback : instance.fallbackDefault;

		if (typeof val !== 'undefined') {
			instance.set(val);

			if (val === null) {
				if (typeof fallback !== 'undefined' && fallback !== null) {
					return fallback;
				} else {
					return instance.fallbackDefault;
				}
			}
			return val;
		}

		return instance.get(fallbackVal);
	};

	return helper;
}

export function createKVPNullable<T>(initial: T | null, fallback: T, options: ArmorKVPOptions<T>): ArmorKVPNullable<T> {
	const instance = new ArmorKVPData<T>(initial, fallback, options);

	const helper: ArmorKVPNullable<T> = (val?: T | null, fallback?: T): T | null => {
		if (typeof val !== 'undefined') {
			instance.set(val);
			return initial;
		}

		return instance.getUnsafe();
	};

	return helper;
}
