import {StrongMap} from '../map';
import {StrongType} from '../strong-type';

export class StrongMapJsonifier {
	public jsonify(map: StrongMap): Record<string, unknown> {
		if (!map) {
			throw Error('Failed to jsonify map - map arg missing.');
		}

		const result = this.jsonifyMap(map);

		return result;
	}

	public jsonifyMap(map: StrongMap): Record<string, unknown> {
		const result = {};

		const keys = Object.keys(map);

		for (const keyName of keys) {
			const child = map[keyName];

			if (child instanceof StrongMap) {
				result[keyName] = this.jsonifyMap(child);
			} else if (child?.typeId === 'StrongType') {
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
			return;
		}

		const assumeKeyIsStrongType = key as StrongType<unknown>;

		if (assumeKeyIsStrongType?.typeId === 'StrongType') {
			return assumeKeyIsStrongType();
		}

		return key;
	}
}
