import {Arch} from '../arch';
import {archSet} from './set';

/**
 * Check whether provided key identifies a supported architecture.
 * @param value
 * @returns
 *
 * @category System Info
 */
export function archValid(key?: Arch | null): boolean {
	if (!key) {
		return false;
	}

	return archSet.has(key);
}
