export function typeValue<T>(typeName: string, value: unknown, fallback: T): T {
	if (typeof value !== typeName) {
		return fallback;
	}

	return value as T;
}
