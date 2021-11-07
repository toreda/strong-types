/**
 * Check if `value` is an array and return it when true. Otherwise returns
 * `fallback`. Guarantees return type without additional checks.
 *
 * @param value			`value` to validate as an Array.
 * @param fallback		Returned when `value` not an Array.
 * @returns				`value` if it's an Array, otherwise `fallback`.
 *
 * @category Collections
 */
export function arrayNullValue(value: unknown, fallback: Array<unknown> | null): Array<unknown> | null {
	if (!Array.isArray(value)) {
		return fallback;
	}

	return value as Array<unknown>;
}
