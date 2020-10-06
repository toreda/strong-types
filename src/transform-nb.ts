import {STTransformFNNB} from './transform-fn-nb';
import {STTransformOptions} from './transform-options';

export class STTransformNB<T> {
	public readonly id: string;
	public readonly label: string;
	public readonly fn: STTransformFNNB<T>;

	constructor(fn: STTransformFNNB<T>, options?: STTransformOptions) {
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
