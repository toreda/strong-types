import {ArmorKVPValidator} from './validator';

export class ArmorKVPValidators<T> {
	public readonly validators: ArmorKVPValidator<T>[];

	constructor() {
		this.validators = [];
	}

	public add(validator: ArmorKVPValidator<T>): boolean {
		this.validators.push(validator);
		return true;
	}

	public run(value: any): boolean {
		for (let i = 0; i < this.validators.length; i++) {
			const validator: ArmorKVPValidator<T> = this.validators[i];

			if (!validator.validate(value)) {
				return false;
			}
		}

		return true;
	}
}
