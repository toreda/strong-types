import KVPRules from './rules';
import KVPState from './state';
import KVPTransforms from './transforms';
import KVPValidators from './validators';

export default class KVPData<T> {
	public value: T | null;
	public readonly fallbackDefault: T;
	public readonly state: KVPState<T>;
	public readonly transforms: KVPTransforms<T>;
	public readonly validators: KVPValidators<T>;
	public readonly rules: KVPRules;

	constructor(initial: T | null, fallbackDefault: T, rules?: KVPRules) {
		this.value = null;
		this.fallbackDefault = fallbackDefault;
		this.state = new KVPState<T>();
		this.transforms = new KVPTransforms<T>(fallbackDefault);
		this.validators = new KVPValidators<T>();
		this.rules = rules ? rules : new KVPRules();
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
