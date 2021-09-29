import {BigArg, typeMatch} from '..';

import Big from 'big.js';

/**
 * Wraps Big object creation with try/catch and returns null when
 * Big constructor throws. Performs no validation on value.
 * @param value
 *
 * @category Maths
 */
export function bigMake(value?: BigArg | null): Big | null {
	if (value === undefined || value === null) {
		return null;
	}

	if (typeMatch(value, Big)) {
		return value;
	}

	let result: Big | null = null;

	try {
		result = Big(value);
	} catch (e) {
		console.error(`Bad bigMake: ${e}.`);
		result = null;
	}

	return result;
}
