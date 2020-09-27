import {KVPOptions} from './options';
import {KVPRule} from './rule/rule';
import {KVPTransform} from './transform';

export class KVPState<T> {
	public readonly rules: KVPRule[];
	public readonly transforms: KVPTransform<T>[];

	constructor(options?: KVPOptions) {
		this.transforms = [];
		this.rules = [];
	}
}
