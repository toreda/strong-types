import {KVPTransformFN} from './transform-fn';
import {KVPTransformOptions} from './transform-options';

export class KVPTransform<T> {
	public readonly id: string;
	public readonly label: string;
	public readonly fn: KVPTransformFN<T>;

	constructor(fn: KVPTransformFN<T>, options?: KVPTransformOptions) {
		if (!fn) {
			throw new Error('KVPTransform init failed - fn argument missing.');
		}

		this.fn = fn;
		this.id = options && typeof options.id === 'string' ? options.id : 'kvp_tf';
		this.label = `kvp_filter_${this.id}`;
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
