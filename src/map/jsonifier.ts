import {MapJsonifierOptions as Options} from './jsonifier/options';
import {MapJsonifierState as State} from './jsonifier/state';
import {Strong} from '../strong';
import {StrongMap} from '../map';

/**
 * @category Strong Map
 */
export class MapJsonifier {
	public jsonify(map: StrongMap, options?: Options): Record<string, unknown> {
		if (!map) {
			throw Error('Failed to jsonify map - map arg missing.');
		}

		const state = new State(options);

		return this.jsonifyMap(map, state);
	}

	public jsonifyMap(map: unknown, state: State): Record<string, unknown> {
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
				result[keyName] = this.jsonifyMap(child, state);
			} else if ((child as Strong<unknown>).typeId === 'StrongType') {
				result[keyName] = this.jsonifyKey(child, state);
			} else if (typeof child !== 'object') {
				result[keyName] = this.jsonifyKey(child, state);
			} else if (Array.isArray(child)) {
				result[keyName] = this.jsonifyKey(child, state);
			} else {
				result[keyName] = this.jsonifyMap(child, state);
			}
		}

		return result;
	}

	public jsonifyKey(key: unknown, _state: State): unknown {
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
