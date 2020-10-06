import {STData} from './data';
import {STRules} from './rules';

export interface StrongType<ValueT, EmptyT> {
	(val?: ValueT | null): ValueT | EmptyT;
	get: (fallback: ValueT) => ValueT | EmptyT;
	getNullable: () => ValueT | EmptyT | null;
	reset: () => void;
	typeId: string;
}

export function makeStrong<ValueT>(
	initial: ValueT | null | undefined,
	fallbackArg: ValueT,
	rules?: STRules<ValueT>
): StrongType<ValueT, ValueT>;

export function makeStrong<ValueT, EmptyReturnT>(
	initial: ValueT | null | undefined,
	fallbackArg: ValueT,
	rules?: STRules<ValueT>
): StrongType<ValueT, EmptyReturnT>;

export function makeStrong<ValueT, EmptyT = ValueT>(
	initial: ValueT | null | undefined,
	fallbackArg: ValueT,
	rules?: STRules<ValueT>
): StrongType<ValueT, EmptyT> {
	const instance = new STData<ValueT, EmptyT>(initial, fallbackArg, rules);

	const localFallback = fallbackArg !== undefined ? fallbackArg : instance.fallbackDefault;

	return Object.assign(
		(val?: ValueT | null): ValueT | EmptyT => {
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
			get: (fallback: ValueT): ValueT | EmptyT => {
				return instance.get(fallback);
			},
			getNullable: (): ValueT | EmptyT | null => {
				return instance.getNullable();
			},
			reset: (): void => {
				instance.reset();
			},
			typeId: 'StrongType'
		}
	);
}
