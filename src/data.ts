import {TBRules} from './rules';
import {TBState} from './state';
import {TBTransforms} from './transforms';

export class TBData<T> {
	public value: T | null;
	public readonly fallbackDefault: T;
	public readonly state: TBState<T>;
	public readonly transforms: TBTransforms<T>;
	public readonly rules: TBRules<T>;

	constructor(initial: T | null, fallbackDefault: T, rules?: TBRules<T>) {
		this.value = null;
		this.fallbackDefault = fallbackDefault;
		this.state = new TBState<T>();
		this.transforms = new TBTransforms<T>(fallbackDefault);
		this.rules = rules ? rules : new TBRules();
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
		return this.value;
	}

	public reset(): void {
		this.value = null;
	}
}
