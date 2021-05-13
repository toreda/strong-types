import {StrongMap} from '../map';
import {StrongMapParserOptions} from './parser/options';
import {StrongMapParserState} from './parser/state';
import {StrongType} from '../strong-type';

export class StrongMapParser {
	public parse(map: StrongMap, json: any, options?: StrongMapParserOptions): boolean {
		if (!map) {
			return false;
		}

		if (!json) {
			return false;
		}

		const state = new StrongMapParserState(options);
		return this.parseMap(map, json, state);
	}

	public parseKey(key: StrongType<any>, value: any, state: StrongMapParserState): boolean {
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

	public parseMap(map: StrongMap, json: any, state: StrongMapParserState): boolean {
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
				this.parseMap(child, json[keyName], state);
				continue;
			}

			this.parseKey(child, json[keyName], state);
		}

		return true;
	}
}
