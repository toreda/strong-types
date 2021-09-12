import {MapJsonifier} from './map/jsonifier';
import {MapParser} from './map/parser';
import {jsonType} from '@toreda/types';

/**
 * Map data structure for Strong Types. Supports recursive parsing of
 * JSON objects into the map, with property type matching and conversion
 * from Strong Map to json object.
 *
 * @category Strong Map
 */
export class StrongMap {
	[index: string]: unknown;

	public parse(json: jsonType): void {
		const parser = new MapParser();
		parser.parse(this, json);
	}

	public jsonify(): Record<string, unknown> {
		const jsonifier = new MapJsonifier();
		return jsonifier.jsonify(this);
	}
}
