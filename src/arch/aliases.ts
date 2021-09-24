import {Arch} from '../arch';

/**
 * Common architecture aliases mappe dto full arch IDs.
 *
 * @category System Info
 */
export const archAliases: {[k: string]: Arch} = {
	/** BSD & Some linux distributions refer to arm64 as aarch64. */
	aarch64: 'arm64',
	/** Specifically the instruction set for arm64, but sometimes used coloqualiiy */
	a64: 'arm64',
	/** Some Windows versions and Linux distributions identify both AMD64 and Intel 64 as 'amd64'. */
	/** Hyphen vs underscore in x86_64 varies by implementation. Strong Types
	 * supports x86_64 as the arch type, but includes this alias to support
	 * mapping it on systems which use the hyphen. */
	'x86-64': 'x86_64',
	/** Technically valid architecture identifier on its own, but commonly used to shorthand x86_64.*/
	x64: 'x86_64'
};
