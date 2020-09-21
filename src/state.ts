import KVPOptions from './options';
import KVPRule from './rule/rule-node';
import KVPRules from './rules';
import KVPStateReject from './state/reject';
import KVPStateRequire from './state/require';
import KVPStateTransform from './state/transform';
import KVPValidator from './validator';

export default class KVPState<T> {
	public readonly rules: KVPRule[];
	public enforce: {
		enabled: boolean;
		reject: KVPStateReject<T>;
		require: KVPStateRequire<T>;
		transform: KVPStateTransform<T>;
		validators: KVPValidator<T>[];
	};

	constructor(rules?: KVPRules) {
		this.enforce = this.create<T>(rules);
		this.rules = [];
	}

	public create<T>(rules?: KVPRules): any {
		return {
			transforms: this.createTransforms<T>(rules),
			validators: this.createValidators<T>(rules)
		};
	}

	public createValidators<T>(rules?: KVPRules): KVPValidator<T>[] {
		return [];
	}


	public createTransforms<T>(rules?: KVPRules): any {
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
