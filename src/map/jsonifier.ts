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
			} else if ((child as Strong<unknown>).typeId === 'StrongType') {
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

		const assumeKeyIsStrongType = key as Strong<unknown>;

		if (assumeKeyIsStrongType?.typeId === 'StrongType') {
			return assumeKeyIsStrongType();
		}

		return key;
	}
}
