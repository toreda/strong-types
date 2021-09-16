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

import {MapParserOptions as Options} from './parser/options';
import {MapParserState as State} from './parser/state';
import {Strong} from '../strong';
import {StrongMap} from '../map';
import {jsonType} from '@toreda/types';

export class MapParser {
	public parse(map: StrongMap, json: jsonType, options?: Options): boolean {
		if (!map) {
			return false;
		}

		if (!json) {
			return false;
		}

		const state = new State(options);

		return this.parseMap(map, json, state);
	}

	public parseStrongKey(key: Strong<unknown>, value: unknown, _state: State): void {
		if (!key || !value) {
			return;
		}

		if (key.typeId !== 'StrongType') {
			return;
		}

		const strongValue = value as Strong<unknown>;
		// When value is also a StrongType invoke it to get its value. Otherwise set
		// the strong key with value.
		if (strongValue.typeId === 'StrongType') {
			key(strongValue());
		} else {
			key(value);
		}
	}

	public parseKey(map: StrongMap, keyName: string, value: unknown): boolean {
		if (!map) {
			return false;
		}

		if (value === undefined) {
			return false;
		}

		if (typeof keyName !== 'string' || !keyName) {
			return false;
		}

		if (value === null) {
			map[keyName] = null;
			return true;
		}

		let result: Strong<unknown> | unknown;
		const strongValue = value as Strong<unknown>;
		if (strongValue.hasOwnProperty('typeId') && strongValue.typeId === 'StrongType') {
			result = strongValue();
		} else {
			result = value;
		}

		if (typeof map[keyName] !== typeof result) {
			return false;
		}

		map[keyName] = result;
		return true;
	}

	public parseMap(map: StrongMap, json: jsonType, state: State): boolean {
		if (!map) {
			return false;
		}

		if (typeof json === 'undefined' || json === {}) {
			return false;
		}

		const keys: string[] = Object.keys(map);

		for (const keyName of keys) {
			const child = map[keyName];
			const jsonObj = json[keyName];

			// Skip built-in properties.
			if (!map.hasOwnProperty(keyName)) {
				continue;
			}

			// Child is also a StrongMap. Parse it recursively.
			if (child instanceof StrongMap) {
				this.parseMap(child, jsonObj, state);
			} else if ((child as Strong<unknown>).typeId === 'StrongType') {
				// Child is a StrongType.
				this.parseStrongKey(child as Strong<unknown>, jsonObj, state);
			} else if (typeof child !== 'object') {
				// Child is not a StrongType and not an object.
				this.parseKey(map, keyName, jsonObj);
			}

			/**
			if (child instanceof StrongMap) {
				if (Array.isArray(jsonObj) || typeof jsonObj !== 'object' || jsonObj == null) {
					continue;
				}

				this.parseMap(child as StrongMap, jsonObj, state);
			} else if ((child as StrongType<unknown>).typeId === 'StrongType') {
				this.parseStrongKey(child as StrongType<unknown>, jsonObj, state);
			} else if (typeof child !== 'object') {
				this.parseStrongKey(child, jsonObj, state);
			} else {
				this.parseMap(child, jsonObj, state);
			}**/
		}

		return true;
	}
}
