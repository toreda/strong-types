import {ArmorInt, ArmorUInt} from './types';

import {ArmorKVPData} from './data';
import {ArmorKVPOptions} from './options';

export type ArmorKVP<T> = (type: T, val?: any | null, fallback?: T) => T;
export type ArmorKVPNullable<T> = (type: T, val?: any | null, fallback?: T) => T | null;

export function createKVP<T>(initial: T | null, fallback: T, options?: ArmorKVPOptions<T>): ArmorKVP<T> {
	const instance = new ArmorKVPData<T>(initial, fallback, options);

	const helper: ArmorKVP<T> = (val?: T | null, fallback?: T): T => {
		if (typeof val !== 'undefined') {
			instance.set(val);

			if (val === null) {
				if (typeof fallback === 'undefined')
			}
			return val;
		}

		// todo: fix this
		if (typeof fallback === 'undefined') {
			return instance.fallbackDefault;
		}

		const result = instance.get(fallback);
		return result;
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
