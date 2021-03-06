import {STTransform} from './transform';
import {STTransformNB} from './transform-nb';

export class STTransforms<T> {
	public readonly transforms: STTransform<T>[];
	public readonly transformsNB: STTransformNB<T>[];
	public readonly fallbackDefault: T;

	constructor(fallbackDefault: T) {
		this.transforms = [];
		this.transformsNB = [];
		this.fallbackDefault = fallbackDefault;
	}

	public addNB(transform: STTransformNB<T>): boolean {
		if (!transform) {
			return false;
		}

		this.transformsNB.push(transform);
		return true;
	}

	public add(transform: STTransform<T>): boolean {
		if (!transform) {
			return false;
		}

		// todo: add sorted insert here based on filter.sortOrder
		this.transforms.push(transform);
		return true;
	}

	public run(value: T): T {
		if (typeof value === 'undefined' || value === null) {
			return this.fallbackDefault;
		}

		let transformed: T = value;
		for (const transform of this.transforms) {
			const input = transformed;
			const output = transform.run(input);
			transformed = output;
		}

		return transformed;
	}

	public runNB(value: T | null): T | null {
		if (typeof value === 'undefined' || value === null) {
			return null;
		}

		let transformed: T | null = value;

		for (const transform of this.transformsNB) {
			const input = transformed;
			const output = transform.run(input);
			transformed = output;
		}

		return transformed;
	}
}
