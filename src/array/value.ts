/**
 * Check whether provided `value` is an Array and return it if so,
 * otherwise return provided `fallback`.
 * @param value			`value` to validate as an Array.
 * @param fallback		Returned when `value` is not an Array.
 * @returns				`value` if it's an Array, otherwise `fallback`.
 *
 * @category Collections
 */
export function arrayValue(value: unknown, fallback: Array<unknown>): Array<unknown> {
	if (!Array.isArray(value)) {
		return fallback;
	}

	return value as Array<unknown>;
}
