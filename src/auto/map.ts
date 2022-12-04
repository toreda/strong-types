/**
 *	MIT License
 *
 *	Copyright (c) 2022 Toreda, Inc.
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

import type {Resettable, Stringable} from '@toreda/types';

import {StrongMap} from '../strong/map';

/**
 * Map with automatic handling for recursively parsing, resetting,
 * stringifying, and serializing properties.
 *
 * @category Map
 */
export class AutoMap<DataT> extends StrongMap {
	public readonly resettable: Resettable[];
	public readonly stringable: Stringable[];

	constructor(data?: DataT) {
		super();

		this.resettable = [];
		this.stringable = [];

		this.parse(data);
	}

	/**
	 * Get all props which support reset functionality.
	 * @returns	Array of references to all resettable properties.
	 */
	public getResettable(): Resettable[] {
		const props: Resettable[] = [];

		for (const propName of Reflect.ownKeys(this)) {
			if (!this.canResetProp(propName)) {
				continue;
			}
			const prop = this[propName] as Resettable;
			props.push(prop);
		}

		return props;
	}

	public canStringifyProp(propName: string | symbol): propName is string {
		if (typeof propName !== 'string') {
			return false;
		}

		const prop = this[propName] as Stringable;

		return prop && typeof prop.toString === 'function';
	}

	public propHasData(propName: string | symbol): propName is string {
		if (typeof propName !== 'string') {
			return false;
		}

		const prop = this[propName] as Serializble;

		return prop && typeof prop.toData === 'function';
	}

	public canResetProp(propName: string | symbol): propName is string {
		if (typeof propName !== 'string') {
			return false;
		}

		const prop = this[propName] as Resettable;

		return prop && typeof prop.reset === 'function';
	}

	public toData(): DataT {
		const obj = {};

		for (const prop of Reflect.ownKeys(this)) {
		}

		return obj as DataT;
	}

	public stringify(): string | null {
		return null;
	}

	public reset(): void {
		for (const prop of this.getResettable()) {
			try {
				prop.reset();
			} catch (e) {
				if (e instanceof Error) {
					console.error(`prop reset failed: ${e.message}`);
				}
			}
		}
	}
}
