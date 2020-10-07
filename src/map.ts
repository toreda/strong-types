import {StrongType, makeStrong} from './strong-type';

import {StrongMapParser} from './map/parser';
import {StrongMapParserOptions} from './map/parser/options';

export class StrongMap {
	public enabled: StrongType<boolean>;

	constructor(enabled: boolean = true) {
		this.enabled = makeStrong<boolean>(enabled, enabled);
	}

	public parse(json: any, options?: StrongMapParserOptions): void {
		const parser = new StrongMapParser();
		parser.parse(this, json, options);
	}
}
