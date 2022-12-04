/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2022 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

import type {Arch} from '../arch';

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
