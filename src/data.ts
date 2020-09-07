import {ArmorKVPOptions} from './options';
import {ArmorKVPState} from './state';
import {ArmorKVPTransforms} from './transforms';
import {ArmorKVPValidators} from './validators';

export class ArmorKVPData<T> {
	public value: T | null;
	public readonly fallbackDefault: T;
	public readonly state: ArmorKVPState<T>;
	public readonly transforms: ArmorKVPTransforms<T>;
	public readonly validators: ArmorKVPValidators<T>;

	constructor(initial: T | null, fallbackDefault: T, options?: ArmorKVPOptions<T>) {
		this.value = null;
		this.fallbackDefault = fallbackDefault;
		this.state = new ArmorKVPState<T>();
		this.transforms = new ArmorKVPTransforms<T>(fallbackDefault);
		this.validators = new ArmorKVPValidators<T>();

		this.set(initial);
	}

	public get(fallback: T): T {
		if (this.value === null) {
			return fallback;
		}

		return this.value;
	}

	public set(value?: T | null): boolean {
		if (typeof value === 'undefined') {
			return false;
		}

		const filteredValue = this.transforms.run(value);

		const valid = this.validators.run(value);

		if (!valid) {
			return false;
		}

		this.value = value;

		return true;
	}

	public getUnsafe(): T | null {
		return this.value;
	}

	public reset(): void {
		this.value = null;
	}
}
