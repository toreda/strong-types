import KVPTransform from './transform';
import KVPTransformNullable from './transform-nullable';

export default class KVPTransforms<T> {
	public readonly transforms: KVPTransform<T>[];
	public readonly transformsNullable: KVPTransformNullable<T>[];
	public readonly fallbackDefault: T;

	constructor(fallbackDefault: T) {
		this.transforms = [];
		this.transformsNullable = [];
		this.fallbackDefault = fallbackDefault;
	}

	public addNullable(transform: KVPTransformNullable<T>): boolean {
		if (!transform) {
			return false;
		}

		this.transformsNullable.push(transform);
		return true;
	}

	public add(transform: KVPTransform<T>): boolean {
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

		for (let i = 0; i < this.transforms.length; i++) {
			const input = transformed;
			const output = this.transforms[i].run(input);
			transformed = output;
		}

		return transformed;
	}

	public runNullable(value: T | null): T | null {
		if (typeof value === 'undefined' || value === null) {
			return null;
		}

		let transformed: T | null = value;

		for (let i = 0; i < this.transformsNullable.length; i++) {
			const input = transformed;
			const output = this.transformsNullable[i].run(input);
			transformed = output;
		}

		return transformed;
	}
}
