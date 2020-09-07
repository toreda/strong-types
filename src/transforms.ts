import {ArmorKVPTransform} from './transform';
import {ArmorKVPTransformNullable} from './transform-nullable';

export class ArmorKVPTransforms<T> {
	public readonly transforms: ArmorKVPTransform<T>[];
	public readonly transformsNullable: ArmorKVPTransformNullable<T>[];
	public readonly fallbackDefault: T;

	constructor(fallbackDefault: T) {
		this.transforms = [];
		this.fallbackDefault = fallbackDefault;
	}

	public addNullable(transform: ArmorKVPTransformNullable<T>): boolean {
		this.transformsNullable.push(transform);
		return true;
	}

	public add(transform: ArmorKVPTransform<T>): boolean {
		// todo: add sorted insert here based on filter.sortOrder
		this.transforms.push(transform);
		return true;
	}

	public run(value: T | null): T {
		if (typeof value === 'undefined' || value === null) {
			return this.fallbackDefault;
		}

		let transformed: T = value;

		for (let i = 0; i < this.transforms.length; i++) {
			let input = transformed;
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
			let input = transformed;
			const output = this.transformsNullable[i].run(input);
			transformed = output;
		}

		return transformed;
	}
}
