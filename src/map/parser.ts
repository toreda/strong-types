import {StrongMapParserOptions as Options} from './parser/options';
import {StrongMapParserState as State} from './parser/state';
import {StrongMap} from '../map';
import {StrongType} from '../strong-type';
import {jsonType} from '@toreda/types';

export class StrongMapParser {
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

	public parseStrongKey(key: StrongType<unknown>, value: unknown, _state: State): void {
		if (!key) {
			return;
		}

		if (key.typeId !== 'StrongType') {
			return;
		}

		const strongValue = value as StrongType<unknown>;
		// When value is also a StrongType invoke it to get its value. Otherwise set
		// the strong key with value.
		if (strongValue.typeId === 'StrongType') {
			key(strongValue());
		} else {
			key(value);
		}
	}

	public parseKey(map: StrongMap, keyName: string, value: unknown): void {
		if (!map) {
			return;
		}

		if (value === undefined) {
			return;
		}

		if (value === null) {
			map[keyName] = null;
			return;
		}

		let result: StrongType<unknown> | unknown;
		const strongValue = value as StrongType<unknown>;
		if (strongValue.hasOwnProperty('typeId') && strongValue.typeId === 'StrongType') {
			result = strongValue();
		} else {
			result = value;
		}

		if (typeof map[keyName] !== typeof result) {
			return;
		}

		map[keyName] = result;
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
			if (map.hasOwnProperty(keyName)) {
				continue;
			}

			// Child is also a StrongMap. Parse it recursively.
			if (child instanceof StrongMap) {
				this.parseMap(child, jsonObj, state);
			} else if ((child as StrongType<unknown>).typeId === 'StrongType') {
				// Child is a StrongType.
				this.parseStrongKey(child as StrongType<unknown>, jsonObj, state);
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
