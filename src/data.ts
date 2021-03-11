import {STRules} from './rules';
import {STState} from './state';
import {STTransforms} from './transforms';

export class STData<ValueT> {
	public value: ValueT | null;
	public readonly fallbackDefault: ValueT;
	public readonly state: STState<ValueT>;
	public readonly transforms: STTransforms<ValueT>;
	public readonly rules: STRules<ValueT>;

	constructor(initial: ValueT | null | undefined, fallbackDefault: ValueT, rules?: STRules<ValueT>) {
		this.value = null;
		this.fallbackDefault = fallbackDefault;
		this.state = new STState<ValueT>();
		this.transforms = new STTransforms<ValueT>(fallbackDefault);
		this.rules = rules ? rules : new STRules();
		this.set(initial);
	}

	public get(fallback: ValueT): ValueT {
		if (this.value === null) {
			if (typeof fallback === 'undefined' || fallback === null) {
				return this.fallbackDefault;
			}

			return fallback;
		}

		return this.value;
	}

	public set(value: ValueT | null | undefined): boolean {
		if (typeof value === 'undefined') {
			return false;
		}

		if (value === null) {
			this.value = null;
			return true;
		}

		const transformed = value;

		const passedValidation = this.rules.run(transformed);
		if (!passedValidation) {
			return false;
		}

		this.value = transformed;

		return true;
	}

	public getNull(): ValueT | null {
		if (typeof this.value === 'undefined') {
			return null;
		}

		return this.value;
	}

	public reset(): void {
		this.value = null;
	}

	public add(amt: number): void {
		if (typeof amt !== 'number') {
			return;
		}

		const val = this.getNull();

		if (typeof val !== 'number') {
			return;
		}

		const setVal = val + amt;

		this.set(setVal as any);
	}
}
