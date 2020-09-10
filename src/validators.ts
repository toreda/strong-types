import ArmorKVPValidator from './validator';

export default class ArmorKVPValidators<T> {
	public readonly validators: ArmorKVPValidator<T>[];

	constructor() {
		this.validators = [];
	}

	public add(validator: ArmorKVPValidator<T>): boolean {
		this.validators.push(validator);
		return true;
	}

	public run(value: T | null): boolean {
		for (let i = 0; i < this.validators.length; i++) {
			const validator: ArmorKVPValidator<T> = this.validators[i];

			if (!validator.run(value)) {
				return false;
			}
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
