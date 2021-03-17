import {StrongMapJsonifierOptions as Options} from './options';

export class StrongMapJsonifierState {
	public readonly visited: Set<any>;

	constructor(options?: Options) {
		this.visited = new Set<any>();
	}
}
