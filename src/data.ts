import {STRules} from './rules';
import {STState} from './state';
import {STTransforms} from './transforms';

export class STData<T> {
	public value: T | null;
	public readonly fallbackDefault: T;
	public readonly state: STState<T>;
	public readonly transforms: STTransforms<T>;
	public readonly rules: STRules<T>;

	constructor(initial: T | null | undefined, fallbackDefault: T, rules?: STRules<T>) {
		this.value = null;
		this.fallbackDefault = fallbackDefault;
		this.state = new STState<T>();
		this.transforms = new STTransforms<T>(fallbackDefault);
		this.rules = rules ? rules : new STRules();
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

	public set(value: T | null | undefined): boolean {
		if (typeof value === 'undefined') {
			return false;
		}

		const transformed = value;

		const passedValidation = this.rules.run(transformed);
		if (!passedValidation) {
			return false;
		}

		this.value = transformed;

		return true;
	}

	public getNullable(): T | null {
		if (typeof this.value === 'undefined') {
			return null;
		}

		return this.value;
	}

	public reset(): void {
		this.value = null;
	}
}
