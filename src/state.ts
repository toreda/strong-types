import KVPOptions from './options';
import KVPRule from './rule/rule';
import KVPRules from './rules';
import KVPStateTransform from './state/transform';
import KVPValidator from './validator';

export default class KVPState<T> {
	public readonly rules: KVPRule[];
	public enforce: {
		enabled: boolean;
		transform: KVPStateTransform<T>;
		validators: KVPValidator<T>[];
	};

	constructor(rules?: KVPRules<T>) {
		this.enforce = this.create<T>(rules);
		this.rules = [];
	}

	public create(rules?: KVPRules<T>): any {
		return {
			transforms: this.createTransforms<T>(rules)
		};
	}

	public createTransforms(rules?: KVPRules<T>): any {
		const transforms = {
			number: {
				operation: 'none'
			}
		};

		if (!rules) {
			return transforms;
		}
	}
}
