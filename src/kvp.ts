import ArmorKVPData from './data';
import ArmorKVPOptions from './options';

interface ArmorKVP<T> {
	(val?: T | null): T;
	get: (fallback: T) => T;
	getNullable: () => T | null;
	reset: () => void;
}

export default ArmorKVP;

export interface ArmorKVPNullable<T> {
	(val?: T | null): T | null;
	get: (fallback: T) => T;
	reset: () => void;
}


export function createKVP<T>(initialArg: T | null, fallbackArg: T, options?: ArmorKVPOptions<T>): ArmorKVP<T> {
	const instance = new ArmorKVPData<T>(initialArg, fallbackArg, options);

	const helper: ArmorKVP<T> = Object.assign(
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

export function createKVPNullable<T>(initial: T | null, fallback: T, options: ArmorKVPOptions<T>): ArmorKVPNullable<T> {
	const instance = new ArmorKVPData<T>(initial, fallback, options);

	const helper: ArmorKVPNullable<T> = Object.assign(
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
