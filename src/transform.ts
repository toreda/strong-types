import {ArmorKVPTransformFn} from './transform-fn';
import ArmorKVPTransformOptions from './transform-options';

export default class ArmorKVPTransform<T> {
	public readonly id: string;
	public readonly label: string;
	public readonly fn: ArmorKVPTransformFn<T>;

	constructor(fn: ArmorKVPTransformFn<T>, options?: ArmorKVPTransformOptions) {
		if (!fn) {
			throw new Error('ArmorKVPTransform init failed - fn argument missing.');
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
