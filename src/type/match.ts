import type {Guarded, PrimitiveOrConstructor} from '@toreda/types';

/**
 * Determine whether object is an instance of provided type or className.
 * @param o
 * @param className
 * @returns
 *
 * @category Validators
 */
export function typeMatch<T extends PrimitiveOrConstructor>(o: unknown, className: T): o is Guarded<T> {
	const localPrimitiveOrConstructor: PrimitiveOrConstructor = className;

	if (typeof localPrimitiveOrConstructor === 'string') {
		return typeof o === localPrimitiveOrConstructor;
	}

	return o instanceof localPrimitiveOrConstructor;
}

/**
 * Alias for typeMatch for backwards compat.
 *
 * @category Validators
 */
export const isType = typeMatch;
