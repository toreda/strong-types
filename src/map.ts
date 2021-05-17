import {JSON} from './aliases';
import {StrongMapJsonifier} from './map/jsonifier';
import {StrongMapParser} from './map/parser';
import {StrongMapJsonifierOptions} from './map/jsonifier/options';
import {StrongMapParserOptions} from './map/parser/options';

export class StrongMap {
	public parse(json: JSON, options?: StrongMapParserOptions): void {
		const parser = new StrongMapParser();
		parser.parse(this, json, options);
	}

	public jsonify(options?: StrongMapJsonifierOptions): Record<string, unknown> {
		const jsonifier = new StrongMapJsonifier();
		return jsonifier.jsonify(this, options);
	}
}
