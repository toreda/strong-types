import {KVPTransformFnNullable} from './transform-fn-nullable';
import {KVPTransformOptions} from './transform-options';

export class KVPTransformNullable<T> {
	public readonly id: string;
	public readonly label: string;
	public readonly fn: KVPTransformFnNullable<T>;

	constructor(fn: KVPTransformFnNullable<T>, options?: KVPTransformOptions) {
		if (!fn) {
			throw new Error('KVPTransformNullable init failed - fn argument missing.');
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
