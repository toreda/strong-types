export function arrayValue(value: unknown, fallback: Array<unknown>): Array<unknown> {
	if (!Array.isArray(value)) {
		return fallback;
	}

	return value as Array<unknown>;
}
