import {ArmorKVPFilterAny} from './filter-function';

export class ArmorKVPValidator<T> {
	public readonly validator: any;

	constructor(validator: ArmorKVPFilterAny) {
		if (typeof validator !== 'function') {
			throw new Error('ArmorKVPValidator init failed - validator argument is not callable.');
		}

		this.validator = validator;
	}

	public validate(value: any): boolean {
		if (!this.validator) {
			console.error('ArmorKVPValidator defaulting to false - validator callback argument is missing.');
			return false;
		}

		if (typeof this.validator !== 'function') {
			console.error(
				'ArmorKVPValidator defaulting to false - validator callback argument is not a valid function.'
			);
			return false;
		}

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
