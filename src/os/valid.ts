import {OS} from 'src/os';
import {osSet} from './set';

/**
 * Check whether target key identifies a supported OS.
 * @param value
 * @returns
 *
 * @category System
 */
export function osValid(key?: OS | null): boolean {
	if (!key) {
		return false;
	}

	return osSet.has(key);
}
