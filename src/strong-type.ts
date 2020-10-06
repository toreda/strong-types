import {STData} from './data';
import {STRules} from './rules';

export interface StrongType<T> {
	(val?: T | null): T;
	get: (fallback: T) => T;
	getNullable: () => T | null;
	reset: () => void;
	typeId: string;
}

export interface StrongTypeNB<T> {
	(val?: T | null): T | null;
	get: (fallback: T) => T;
	reset: () => void;
	typeId: string;
}

export function makeStrong<T>(
	initialValue: T | null | undefined,
	fallbackArg: T,
	rules?: STRules<T>
): StrongType<T> {
	const instance = new STData<T>(initialValue, fallbackArg, rules);

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
			},
			typeId: 'StrongType'
		}
	);
}

export function makeStrongNB<T>(
	initial: T | null | undefined,
	fallbackArg: T,
	rules?: STRules<T>
): StrongTypeNB<T> {
	const instance = new STData<T>(initial, fallbackArg, rules);

	return Object.assign(
		(val?: T): T | null => {
			if (typeof val !== 'undefined') {
				instance.set(val);
				return val;
			}

			return instance.getNullable();
		},
		{
			get: (fallback: T): T => {
				return instance.get(fallback);
			},
			reset: () => {
				instance.reset();
			},
			typeId: 'StrongTypeNB'
		}
	);
}
