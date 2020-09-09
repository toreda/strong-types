import ArmorKVPValidatorFn from './validator-fn';

export default class ArmorKVPValidator<T> {
	public readonly validator: ArmorKVPValidatorFn<T>;

	constructor(validator: ArmorKVPValidatorFn<T>) {
		if (!validator) {
			throw new Error('ArmorKVPValidator init failed - validator argument is missing.');
		}

		if (typeof validator !== 'function') {
			throw new Error('ArmorKVPValidator init failed - validator argument is not a callable validator fn.');
		}

		this.validator = validator;
	}

	public run(value: T | null): boolean {
		let result: boolean = false;

		try {
			result = this.validator(value);
		} catch (e) {
			console.error(`ArmorKVPValidator defaulting to false. Validator callback threw: ${e.message}.`);
			result = false;
		}

		return result;
	}
}
