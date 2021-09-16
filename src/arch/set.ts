import {Arch} from '../arch';

/**
 * All supported target architecture keys. This is not an
 * exhaustive list, only those currently supported.
 *
 * @category System
 */
export const archSet = new Set<Arch>(['x86', 'x86_64', 'arm', 'arm64']);
