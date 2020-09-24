import KVPValidator from './validator';

export default class KVPValidators<T> {
	public readonly validators: KVPValidator<T>[];

	constructor() {
		this.validators = [];
	}

	public add(validator: KVPValidator<T>): boolean {
		this.validators.push(validator);
		return true;
	}

	public addGroup(validators: KVPValidator<T>[]): boolean {
		if (!Array.isArray(validators)) {
			return false;
		}

		validators.forEach((validator: KVPValidator<T>) => {
			this.validators.push(validator);
		});

		return true;
	}

	public run(value: T | null): boolean {
		for (const validator of this.validators) {
			const result = validator.run(value);

			if (!result) {
				return false;
			}
		}

		return true;
	}

	public reset(): void {
		// Remove all validators
		this.validators.length = 0;
	}
}
