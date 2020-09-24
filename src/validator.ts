import KVPValidatorFn from './validator-fn';

export default class KVPValidator<T> {
	public readonly fn: KVPValidatorFn<T>;

	constructor(fn: KVPValidatorFn<T>) {
		if (!fn) {
			throw new Error('KVPValidator init failed - fn argument missing.');
		}

		this.fn = fn;
	}

	public run(value: T | null): boolean {
		return this.fn(value);
	}
}
