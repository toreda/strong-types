/**
 * Validate `value` a valid type_T and return it if valid, otherwise
 * return `fallback`. Quick and easy way to validate configs, maps, and
 * other objects with a guaranteed return type.
 * @param typeName		JavaScript type name for expected type.
 * @param value			Value to be validated as `typeName`.
 * @param fallback		Value returned when `value` is not a valid type_T.
 * @returns
 *
 * @category Core
 */
export function typeValue<T>(typeName: string, value: unknown, fallback: T): T {
	if (typeof value !== typeName) {
		return fallback;
	}

	return value as T;
}
