import {TransformFNNB} from './fn/nb';
import {TransformOptions} from './options';

/**
 * @category Transforms
 */
export class TransformNB<T> {
	public readonly id: string;
	public readonly label: string;
	public readonly fn: TransformFNNB<T>;

	constructor(fn: TransformFNNB<T>, options?: TransformOptions) {
		if (!fn) {
			throw new Error('STTransformNB init failed - fn argument missing.');
		}

		this.fn = fn;
		this.id = options && typeof options.id === 'string' ? options.id : 'ST_tf';
		this.label = `ST_filter_${this.id}`;
	}

	public run(value: T | null): T | null {
		let result = value;

		try {
			result = this.fn(value);
		} catch (e) {
			console.error(`[${this.label}]`);
		}

		return result;
	}
}
