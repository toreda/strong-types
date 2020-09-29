import {TBTransformFN} from './transform-fn';
import {TBTransformOptions} from './transform-options';

export class TBTransform<T> {
	public readonly id: string;
	public readonly label: string;
	public readonly fn: TBTransformFN<T>;

	constructor(fn: TBTransformFN<T>, options?: TBTransformOptions) {
		if (!fn) {
			throw new Error('TBTransform init failed - fn argument missing.');
		}

		this.fn = fn;
		this.id = options && typeof options.id === 'string' ? options.id : 'tb_tf';
		this.label = `tb_filter_${this.id}`;
	}

	public run(value: T): T {
		let result = value;

		try {
			result = this.fn(value);
		} catch (e) {
			console.error(`[${this.label}]`);
		}

		return result;
	}
}
