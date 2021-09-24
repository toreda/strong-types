import {Arch} from '../arch';

/**
 * All supported target architecture keys. This is not an
 * exhaustive list, only those currently supported.
 *
 * @category System Info
 */
export const archSet = new Set<Arch>([
	'arc',
	'arm',
	'arm64',
	'itanium',
	'mips',
	'powerpc',
	'sparc',
	'x86_64',
	'x86'
]);
