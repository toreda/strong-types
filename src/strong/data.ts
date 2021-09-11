import type {ANY} from '@toreda/types';
import {Rules} from '../rules';
import {StrongState} from './state';
import {Transforms} from '../transforms';

export class StrongData<ValueT> {
	public value: ValueT | null;
	public readonly fallbackDefault: ValueT;
	public readonly state: StrongState<ValueT>;
	public readonly transforms: Transforms<ValueT>;
	public readonly rules: Rules<ValueT>;

	constructor(fallbackDefault: ValueT, initial?: ValueT | null, rules?: Rules<ValueT>) {
		this.value = null;
		this.fallbackDefault = fallbackDefault;
		this.state = new StrongState<ValueT>();
		this.transforms = new Transforms<ValueT>(fallbackDefault);
		this.rules = rules ? rules : new Rules();
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

	public set(value?: ValueT | null): boolean {
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

		this.set(setVal as ANY);
	}
}
