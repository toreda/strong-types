import {Transform} from './transform';
import {TransformNB} from './transform/nb';

/**
 * Container holding the transform function chain used to transform
 * values before saving. Transforms are applied in the order they are
 * stored in the transforms or transformsNB array.
 *
 * @category Transforms
 */
export class Transforms<T> {
	public readonly transforms: Transform<T>[];
	public readonly transformsNB: TransformNB<T>[];
	public readonly fallbackDefault: T;

	constructor(fallbackDefault: T) {
		this.transforms = [];
		this.transformsNB = [];
		this.fallbackDefault = fallbackDefault;
	}

	/**
	 * Add nullable transform function to chain.
	 * @param transform		Nullable transform fn to be added to chain.
	 * @returns				Boolean indicating add success or failure.
	 *						true	-	Transform fn added to chain successfully.
	 *						false	-	Transform fn not added to chain.
	 */
	public addNB(transform: TransformNB<T>): boolean {
		if (!transform) {
			return false;
		}

		this.transformsNB.push(transform);
		return true;
	}

	/**
	 * Add transform function to chain.
	 * @param transform		Transform fn to be added to chain.
	 * @returns				Boolean indicating add success or failure.
	 *						true	-	Transform fn added to chain successfully.
	 *						false	-	Transform fn not added to chain.
	 */
	public add(transform: Transform<T>): boolean {
		if (!transform) {
			return false;
		}

		// todo: add sorted insert here based on filter.sortOrder
		this.transforms.push(transform);
		return true;
	}

	/**
	 * Run transform chain, applying each transforms once the order added to
	 * the chain.
	 * @param value
	 * @returns
	 */
	public run(value: T): T {
		if (typeof value === 'undefined' || value === null) {
			return this.fallbackDefault;
		}

		let transformed: T = value;
		const transforms = this.transforms;

		for (const transform of transforms) {
			const input = transformed;
			const output = transform.run(input);
			transformed = output;
		}

		return transformed;
	}

	/**
	 * Run transform chain, applying each transforms once the order added to
	 * the chain.
	 * @param value
	 * @returns
	 */
	public runNB(value: T | null): T | null {
		if (typeof value === 'undefined' || value === null) {
			return null;
		}

		let transformed: T | null = value;

		const transformsNB = this.transformsNB;
		for (const transform of transformsNB) {
			const input = transformed;
			const output = transform.run(input);
			transformed = output;
		}

		return transformed;
	}

	/**
	 * Remove all transform functions from chain. Fallback value
	 * remains the same.
	 */
	public reset(): void {
		this.transforms.length = 0;
		this.transformsNB.length = 0;
	}
}
