import {Rules} from './rules';
import {StrongData} from './strong/data';

export interface Strong<ValueT> {
	(val?: ValueT | null): ValueT;
	get: (fallback: ValueT) => ValueT;
	getNull: () => ValueT | null;
	reset: () => void;
	typeId: 'StrongType' | string;
	_data: StrongData<ValueT>;
}

/**
 * Temporary Strong<ValueT> alias for backwards compat.
 */
export type StrongType<ValueT> = Strong<ValueT>;

export function makeStrong<ValueT>(
	fallbackArg: ValueT,
	initial?: ValueT | null,
	rules?: Rules<ValueT>
): Strong<ValueT> {
	const instance = new StrongData<ValueT>(fallbackArg, initial, rules);

	const localFallback = fallbackArg !== undefined ? fallbackArg : instance.fallbackDefault;

	return Object.assign(
		(val?: ValueT | null): ValueT => {
			if (typeof val !== 'undefined') {
				instance.set(val);
			}

			return instance.get(localFallback);
		},
		{
			get: (fallback: ValueT): ValueT => {
				return instance.get(fallback);
			},
			getNull: (): ValueT | null => {
				return instance.getNull();
			},
			reset: (): void => {
				instance.reset();
			},
			typeId: 'StrongType',
			_data: instance
		}
	);
}
