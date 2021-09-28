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

import {Strong} from '../strong';
import {StrongMap} from '../map';

/**
 * @category Strong Map
 */
export class MapJsonifier {
	public jsonify(map: StrongMap): Record<string, unknown> {
		if (!map) {
			throw Error(`Bad MapJsonifier.jsonify attempt - map arg missing.`);
		}

		return this.jsonifyMap(map);
	}

	public jsonifyMap(map: unknown): Record<string, unknown> {
		const result: Record<string, unknown> = {};

		const keys = Object.keys(map as Record<string, unknown>);

		for (const keyName of keys) {
			const child: unknown = (map as Record<string, unknown>)[keyName];

			if (child === undefined) {
				continue;
			}

			if (child === null) {
				result[keyName] = null;
			} else if (child instanceof StrongMap) {
				result[keyName] = this.jsonifyMap(child);
			} else if ((child as Strong).typeId === 'StrongType') {
				result[keyName] = this.jsonifyKey(child);
			} else if (typeof child !== 'object') {
				result[keyName] = this.jsonifyKey(child);
			} else if (Array.isArray(child)) {
				result[keyName] = this.jsonifyKey(child);
			} else {
				result[keyName] = this.jsonifyMap(child);
			}
		}

		return result;
	}

	public jsonifyKey(key: unknown): unknown {
		if (key === undefined) {
			return undefined;
		}

		if (key === null) {
			return null;
		}

		const assumeKeyIsStrongType = key as Strong;

		if (assumeKeyIsStrongType?.typeId === 'StrongType') {
			return assumeKeyIsStrongType();
		}

		return key;
	}
}
