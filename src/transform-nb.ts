import {TBTransformFNNB} from './transform-fn-nb';
import {TBTransformOptions} from './transform-options';

export class TBTransformNB<T> {
	public readonly id: string;
	public readonly label: string;
	public readonly fn: TBTransformFNNB<T>;

	constructor(fn: TBTransformFNNB<T>, options?: TBTransformOptions) {
		if (!fn) {
			throw new Error('TBTransformNB init failed - fn argument missing.');
		}

		this.fn = fn;
		this.id = options && typeof options.id === 'string' ? options.id : 'tb_tf';
		this.label = `tb_filter_${this.id}`;
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
