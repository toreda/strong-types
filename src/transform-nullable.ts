import {ArmorKVPTransformFnNullable} from './transform-fn';
import ArmorKVPTransformOptions from './transform-options';

export default class ArmorKVPTransformNullable<T> {
	public readonly id: string;
	public readonly label: string;
	public readonly fn: ArmorKVPTransformFnNullable<T>;

	constructor(fn: ArmorKVPTransformFnNullable<T>, options?: ArmorKVPTransformOptions) {
		if (!fn) {
			throw new Error('ArmorKVPTransformNullable init failed - fn argument missing.');
		}

		this.fn = fn;
		this.id = options && typeof options.id === 'string' ? options.id : 'kvp_tf';
		this.label = `kvp_filter_${this.id}`;
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
