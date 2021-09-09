import {StrongMapJsonifier} from './map/jsonifier';
import {StrongMapJsonifierOptions} from './map/jsonifier/options';
import {StrongMapParser} from './map/parser';
import {StrongMapParserOptions} from './map/parser/options';
import {jsonType} from '@toreda/types';

export class StrongMap {
	[index: string]: unknown;

	public parse(json: jsonType, options?: StrongMapParserOptions): void {
		const parser = new StrongMapParser();
		parser.parse(this, json, options);
	}

	public jsonify(options?: StrongMapJsonifierOptions): Record<string, unknown> {
		const jsonifier = new StrongMapJsonifier();
		return jsonifier.jsonify(this, options);
	}
}
