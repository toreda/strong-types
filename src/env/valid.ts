import {Env} from '../env';
import {envSet} from './set';

/**
 * Check whether provided key identifies a supported env value.
 * @param value
 * @returns
 *
 * @category System Info
 */
export function envValid(key?: Env | null): boolean {
	if (!key) {
		return false;
	}

	return envSet.has(key);
}
