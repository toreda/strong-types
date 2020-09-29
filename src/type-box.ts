import {TBData} from './data';
import {TBRules} from './rules';

export interface TypeBox<T> {
	(val?: T | null): T;
	get: (fallback: T) => T;
	getNullable: () => T | null;
	reset: () => void;
}

export interface TypeBoxNB<T> {
	(val?: T | null): T | null;
	get: (fallback: T) => T;
	reset: () => void;
}

export function create<T>(initialValue: T | null, fallbackArg: T, rules?: TBRules<T>): TypeBox<T> {
	const instance = new TBData<T>(initialValue, fallbackArg, rules);

	const localFallback = fallbackArg !== undefined ? fallbackArg : instance.fallbackDefault;

	return Object.assign(
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
}

export function createNB<T>(initial: T | null, fallbackArg: T, rules?: TBRules<T>): TypeBoxNB<T> {
	const instance = new TBData<T>(initial, fallbackArg, rules);

	return Object.assign(
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
}
