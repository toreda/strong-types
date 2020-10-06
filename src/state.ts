import {STOptions} from './options';
import {STRule} from './rule/rule';
import {STTransform} from './transform';

export class STState<T> {
	public readonly rules: STRule[];
	public readonly transforms: STTransform<T>[];

	constructor(options?: STOptions) {
		this.transforms = [];
		this.rules = [];
	}
}
