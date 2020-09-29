import {TBOptions} from './options';
import {TBRule} from './rule/rule';
import {TBTransform} from './transform';

export class TBState<T> {
	public readonly rules: TBRule[];
	public readonly transforms: TBTransform<T>[];

	constructor(options?: TBOptions) {
		this.transforms = [];
		this.rules = [];
	}
}
