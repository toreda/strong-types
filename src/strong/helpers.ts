export function toBigInt(value?: number | string | bigint | null): bigint | null {
	if (value === undefined || value === null) {
		return null;
	}

	if (typeof value === 'bigint') {
		return value;
	}

	if (typeof value !== 'number' || typeof value !== 'string') {
		return null;
	}

	if (typeof value === 'number') {
		if (isNaN(value) || value >= Number.POSITIVE_INFINITY || value <= Number.NEGATIVE_INFINITY) {
			return null;
		}

		if (value >= Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER) {
			return null;
		}
	}

	return BigInt(value);
}
