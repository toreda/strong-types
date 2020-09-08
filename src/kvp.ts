import ArmorKVPData from './data';
import ArmorKVPOptions from './options';

interface ArmorKVP<T> {
	(val?: T | null): T;
	get: (fallback: T) => T;
}

export default ArmorKVP;

export type ArmorKVPNullable<T> = (val?: T | null, fallback?: T) => T | null;

export function createKVP<T>(initial: T | null, fallback: T, options?: ArmorKVPOptions<T>): ArmorKVP<T> {
	const instance = new ArmorKVPData<T>(initial, fallback, options);

	const helper: ArmorKVP<T> = Object.assign(
		(val?: T): T => {
			const fallbackVal = typeof fallback !== 'undefined' ? fallback : instance.fallbackDefault;

			if (typeof val !== 'undefined') {
				instance.set(val);

				if (val === null) {
					return instance.fallbackDefault;
				}
				return val;
			}

			return instance.get(fallbackVal);
		},
		{
			get: (fallback: T) => {
				return instance.get(fallback);
			}
		}
	);

	return helper;
}

export function createKVPNullable<T>(initial: T | null, fallback: T, options: ArmorKVPOptions<T>): ArmorKVPNullable<T> {
	const instance = new ArmorKVPData<T>(initial, fallback, options);

	const helper: ArmorKVPNullable<T> = (val?: T): T | null => {
		if (typeof val !== 'undefined') {
			instance.set(val);
			return initial;
		}

		return instance.getNullable();
	};

	return helper;
}
