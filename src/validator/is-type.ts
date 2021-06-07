import {ANY} from '../aliases';
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

export function isType<T extends PrimitiveOrConstructor>(o: ANY, className: T): o is GuardedType<T> {
	const localPrimitiveOrConstructor: PrimitiveOrConstructor = className;

	if (typeof localPrimitiveOrConstructor === 'string') {
		return typeof o === localPrimitiveOrConstructor;
	}

	return o instanceof localPrimitiveOrConstructor;
}
