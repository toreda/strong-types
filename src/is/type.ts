/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2021 Toreda, Inc.
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

import {ANY} from '@toreda/types';
// typeguard implementation by Ran Lottem
// https://dev.to/krumpet/generic-type-guard-in-typescript-258l

export interface TypeMap {
	// for mapping from strings to types
	string: string;
	number: number;
	boolean: boolean;
}

// 'string' | 'number' | 'boolean' | constructor
export type PrimitiveOrConstructor = {new (...args: ANY[]): ANY} | keyof TypeMap;

// infer the guarded type from a specific case of PrimitiveOrConstructor
export type GuardedType<T extends PrimitiveOrConstructor> = T extends {
	new (...args: ANY[]): infer U;
}
	? U
	: T extends keyof TypeMap
	? TypeMap[T]
	: never;

export function typeMatch<T extends PrimitiveOrConstructor>(o: ANY, className: T): o is GuardedType<T> {
	const localPrimitiveOrConstructor: PrimitiveOrConstructor = className;

	if (typeof localPrimitiveOrConstructor === 'string') {
		return typeof o === localPrimitiveOrConstructor;
	}

	return o instanceof localPrimitiveOrConstructor;
}

/** typeMatch alias for backwards compat. */
export const isType = typeMatch;
