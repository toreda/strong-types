import {JSON} from '../aliases';
import {StrongMap} from '../map';
import {StrongType} from '../strong-type';

export class StrongMapParser {
	public parse(map: StrongMap, json: JSON): boolean {
		if (!map) {
			return false;
		}

		if (!json) {
			return false;
		}

		return this.parseMap(map, json);
	}

	public parseKey(key: StrongType<unknown>, value: unknown): void {
		if (!key) {
			return;
		}

		if (key.typeId !== 'StrongType') {
			return;
		}

		key(value);
	}

	public parseMap(map: StrongMap, json: JSON): boolean {
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

			if (child instanceof StrongMap) {
				if (Array.isArray(jsonObj) || typeof jsonObj !== 'object' || jsonObj == null) {
					continue;
				}

				this.parseMap(child, jsonObj);
			} else if (child?.typeId === 'StrongType') {
				this.parseKey(child, jsonObj);
			} else if (typeof child !== 'object') {
				this.parseKey(child, jsonObj);
			} else {
				this.parseMap(child, jsonObj);
			}
		}

		return true;
	}
}
