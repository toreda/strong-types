import KVPValidatorFn from './validator-fn';

export type KVPValidatorNodeChildRule = 'and' | 'or' | '';

export default class KVPValidatorNode<T> {
	public readonly childRule: KVPValidatorNodeChildRule;
	public readonly children: KVPValidatorNode<T>[];
	public readonly validator: KVPValidatorFn<T>;

	constructor(validator: KVPValidatorFn<T>, childRule?: KVPValidatorNodeChildRule) {
		if (!validator) {
			throw new Error('KVPValidator init failed - validator argument is missing.');
		}

		if (typeof validator !== 'function') {
			throw new Error('KVPValidator init failed - validator argument is not a callable validator fn.');
		}

		this.childRule = !childRule ? '' : childRule;
		this.children = [];
		this.validator = validator;
	}

	public run(value: T | null): boolean {
		let result: boolean = false;

		try {
			result = this.validator(value);
		} catch (e) {
			console.error(`KVPValidator defaulting to false. Validator callback threw: ${e.message}.`);
			result = false;
		}

		return result;
	}
}
