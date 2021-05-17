import {JSON} from './aliases';
import {StrongMapJsonifier} from './map/jsonifier';
import {StrongMapParser} from './map/parser';

export class StrongMap {
	public parse(json: JSON): void {
		const parser = new StrongMapParser();
		parser.parse(this, json);
	}

	public jsonify(): Record<string, unknown> {
		const jsonifier = new StrongMapJsonifier();
		return jsonifier.jsonify(this);
	}
}
