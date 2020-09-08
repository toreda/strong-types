import ArmorKVPOptions from './options';
import ArmorKVPState from './state';
import ArmorKVPTransforms from './transforms';
import ArmorKVPValidators from './validators';

export default class ArmorKVPData<T> {
	public value: T | null;
	public readonly fallbackDefault: T;
	public readonly state: ArmorKVPState<T>;
	public readonly transforms: ArmorKVPTransforms<T>;
	public readonly validators: ArmorKVPValidators<T>;
	public readonly nullable: boolean;

	constructor(initial: T | null, fallbackDefault: T, options?: ArmorKVPOptions<T>) {
		this.value = null;
		this.fallbackDefault = fallbackDefault;
		this.state = new ArmorKVPState<T>();
		this.transforms = new ArmorKVPTransforms<T>(fallbackDefault);
		this.validators = new ArmorKVPValidators<T>();
		this.nullable = options && options.nullable === true ? true : false;

		this.set(initial);
	}

	public get(fallback: T): T {
		if (this.value === null) {
			if (typeof fallback === 'undefined' || fallback === null) {
				return this.fallbackDefault;
			}

			return fallback;
		}

		return this.value;
	}

	public set(value: T | null): boolean {
		if (typeof value === 'undefined') {
			console.error('set called with undefined value');
			return false;
		}

		let transformed = value;

/* 		if (this.nullable) {
			transformed = this.transforms.runNullable(value);
		} else {
			transformed = this.transforms.run(value);
		}

		const valid = this.validators.run(transformed); */

/* 		if (!valid) {
			return false;
		} */

		this.value = value;

		return true;
	}

	public getNullable(): T | null {
		return this.value;
	}

	public reset(): void {
		this.value = null;
	}
}
