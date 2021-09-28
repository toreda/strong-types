import Big from 'big.js';
import {typeMatch} from '../type/match';

const BIG_MAX_SAFE_INT = Big(Number.MAX_SAFE_INTEGER);
const BIG_MIN_SAFE_INT = Big(Number.MIN_SAFE_INTEGER);

export function canConvertFromBig(value?: Big | null): boolean {
	if (value === undefined || value === null) {
		return false;
	}

	if (!typeMatch(value, Big)) {
		return false;
	}

	if (value.gt(BIG_MAX_SAFE_INT) || value.lt(BIG_MIN_SAFE_INT)) {
		return false;
	}

	return true;
}

export function toIntNumber(value?: number | string | Big | null): number | null {
	if (value === undefined || value === null) {
		return null;
	}

	// Possible precision loss, not an idea conversion.
	if (typeMatch(value, Big)) {
		if (value.gt(Number.MAX_SAFE_INTEGER) || value.lt(Number.MAX_SAFE_INTEGER)) {
			return null;
		} else {
			return value.toNumber();
		}
	}

	if (typeof value === 'string') {
		const result = parseInt(value);
		return !isNaN(result) ? result : null;
	}

	if (value >= Number.POSITIVE_INFINITY || value <= Number.NEGATIVE_INFINITY) {
		return null;
	}

	return value;
}

/**
 * Convert a Big, string, or number to standard float (`number`). Returns `null` when
 * input value is `undefined`, `null`, or a `Big` value which cannot be safely converted
 * to `number`. Useful for working with `Big` values but small types, such as a small exponent,
 * which must be in number form to use with a `Big`.
 * @param value
 * @returns
 *
 * @category Strong Type Helpers
 */
export function toFloat(value?: number | string | Big | null): number | null {
	if (value === undefined || value === null) {
		return null;
	}

	if (typeMatch(value, Big)) {
		if (value.gt(Number.MAX_SAFE_INTEGER) || value.lt(Number.MIN_SAFE_INTEGER)) {
			return null;
		} else {
			return value.toNumber();
		}
	}

	if (typeof value === 'string') {
		const result = parseFloat(value);
		if (!isNaN(result) && isFinite(result)) {
			return result;
		} else {
			return null;
		}
	}

	return value;
}

export function toIntBig(value?: number | string | Big | null): Big | null {
	if (value === undefined || value === null) {
		return null;
	}

	if (typeMatch(value, Big)) {
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

	return Big(value);
}
