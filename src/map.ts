import {json} from './aliases';
import {StrongMapJsonifier} from './map/jsonifier';
import {StrongMapJsonifierOptions} from './map/jsonifier/options';
import {StrongMapParser} from './map/parser';
import {StrongMapParserOptions} from './map/parser/options';
import {StrongType, makeStrong} from './strong-type';

export class StrongMap {
	public enabled: StrongType<boolean>;

	constructor(enabled: boolean = true) {
		this.enabled = makeStrong<boolean>(enabled, enabled);
	}

	public parse(json: json, options?: StrongMapParserOptions): void {
		const parser = new StrongMapParser();
		parser.parse(this, json, options);
	}

	public jsonify(options?: StrongMapJsonifierOptions): Record<string, unknown> {
		const jsonifier = new StrongMapJsonifier();
		return jsonifier.jsonify(this, options);
	}
}
