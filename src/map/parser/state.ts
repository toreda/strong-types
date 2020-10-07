import {StrongMapParserOptions} from './options';

export class StrongMapParserState {
	public readonly visited: Set<any>;
	public parsedKeys: number;

	constructor(options?: StrongMapParserOptions) {
		this.visited = new Set<any>();
		this.parsedKeys = 0;
	}
}
