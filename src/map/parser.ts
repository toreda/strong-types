import {JSONObject} from '../aliases';
import {StrongMap} from '../map';
import {StrongType} from '../strong-type';
import {StrongMapParserOptions} from './parser/options';
import {StrongMapParserState} from './parser/state';

export class StrongMapParser {
	public parse(map: StrongMap, json: JSONObject, options?: StrongMapParserOptions): boolean {
		if (!map) {
			return false;
		}

		if (!json) {
			return false;
		}

		const state = new StrongMapParserState(options);
		return this.parseMap(map, json, state);
	}

	public parseKey(key: StrongType<unknown>, value: unknown, state: StrongMapParserState): boolean {
		if (!key) {
			return false;
		}

		if (key.typeId !== 'StrongType') {
			return false;
		}

		key(value);
		state.parsedKeys++;
		return true;
	}

	public parseMap(map: StrongMap, json: JSONObject, state: StrongMapParserState): boolean {
		if (!(map instanceof StrongMap)) {
			return false;
		}

		if (typeof json === 'undefined' || json === {}) {
			return false;
		}

		state.visited.add(map);
		const keys: string[] = Object.keys(map);

		for (const keyName of keys) {
			const child = map[keyName];
			if (child instanceof StrongMap) {
				const jsonObj = json[keyName];

				if (Array.isArray(jsonObj) || typeof jsonObj !== 'object') {
					continue;
				}

				this.parseMap(child, jsonObj, state);
				continue;
			}

			this.parseKey(child, json[keyName], state);
		}

		return true;
	}
}
