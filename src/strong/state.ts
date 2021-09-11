import {Rule} from '../rule';
import {Transform} from '../transform';

export class StrongState<T> {
	public readonly rules: Rule[];
	public readonly transforms: Transform<T>[];

	constructor() {
		this.transforms = [];
		this.rules = [];
	}
}
