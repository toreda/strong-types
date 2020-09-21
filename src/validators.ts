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
		for (let i = 0; i < this.validators.length; i++) {
			const validator: KVPValidator<T> = this.validators[i];

/* 			if (!validator.run(value)) {
				return false;
			} */
		}

		return true;
	}

	public reset(): void {
		// Remove all validators
		for (let i = this.validators.length - 1; i >= 0; i--) {
			this.validators.pop();
		}
	}
}
