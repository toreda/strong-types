import {ArmorKVPTransformFn, ArmorKVPTransformFnNullable} from './transform-fn';

export class ArmorKVPTransform<T> {
	public readonly id: string;
	public readonly label: string;
	public readonly sortOrder: number;
	public readonly fn: ArmorKVPTransformFn<T>;

	constructor(id: string, fn: ArmorKVPTransformFn<T>, sortOrder?: number) {
		this.fn = fn;
		this.id = id;
		this.label = `kvp_filter_${this.id}`;
		this.sortOrder = typeof sortOrder === 'number' ? sortOrder : 0;
	}

	public run(value: T | null): T | null {
		if (!this.fn) {
			console.error(`[${this.label}] Run failed - filter fn missing.`);
			return null;
		}

		let result = value;

		try {
			result = this.fn(value);
		} catch (e) {
			console.error(`[${this.label}]`)
		}

		return result;
	}
}
