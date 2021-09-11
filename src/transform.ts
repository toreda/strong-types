import {TransformFN} from './transform/fn';
import {TransformOptions} from './transform/options';

export class Transform<T> {
	public readonly id: string;
	public readonly label: string;
	public readonly fn: TransformFN<T>;

	constructor(fn: TransformFN<T>, options?: TransformOptions) {
		if (!fn) {
			throw new Error('STTransform init failed - fn argument missing.');
		}

		this.fn = fn;
		this.id = options && typeof options.id === 'string' ? options.id : 'ST_tf';
		this.label = `ST_filter_${this.id}`;
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
