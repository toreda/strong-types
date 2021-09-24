import {Env} from '../env';

/**
 * All supported target env keys. This is not an
 * exhaustive list, only those currently supported.
 *
 * @category System Info
 */
export const envSet = new Set<Env>(['dev', 'live', 'prod', 'qa', 'stage']);
