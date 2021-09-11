import {MapJsonifier} from './map/jsonifier';
import {MapJsonifierOptions} from './map/jsonifier/options';
import {MapParser} from './map/parser';
import {MapParserOptions} from './map/parser/options';
import {jsonType} from '@toreda/types';

export class StrongMap {
	[index: string]: unknown;

	public parse(json: jsonType, options?: MapParserOptions): void {
		const parser = new MapParser();
		parser.parse(this, json, options);
	}

	public jsonify(options?: MapJsonifierOptions): Record<string, unknown> {
		const jsonifier = new MapJsonifier();
		return jsonifier.jsonify(this, options);
	}
}
