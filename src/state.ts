import ArmorKVPOptions from './options';

export default class ArmorKVPState<T> {
	public enforce: {
		enabled: boolean;
		length: {
			enabled: boolean;
			min: number;
			max: number;
		},
		range: {
			enabled: boolean;
			min: number;
			max: number;
		}
	};

	constructor(options?: ArmorKVPOptions<T>) {
		this.enforce = this.create(options);
		this.enforce.enabled = (this.enforce.length.enabled || this.enforce.range.enabled);
	}

	public create(options?: ArmorKVPOptions<T>): any {
		return {
			length: this.createLength(options),
			range: this.createRange(options)
		};
	}

	public createLength(options?: ArmorKVPOptions<T>): any {
		const config = {
			enabled: false,
			min: 0,
			max: 0
		};

		if (!options || !options.enforce || !options.enforce.length) {
			return config;
		}

		const enforceLength = options.enforce.length;

		if (typeof enforceLength.min === 'number') {
			config.min = enforceLength.min;
		}

		if (typeof enforceLength.max === 'number') {
			config.max = enforceLength.max;
		}

		if (config.min > 0 || config.max > 0) {
			config.enabled = true;
		}

		return config;
	}

	public createRange(options?: ArmorKVPOptions<T>): any {
		const config = {
			enabled: false,
			min: 0,
			max: 0
		};

		if (!options || !options.enforce || !options.enforce.range) {
			return config;
		}

		const range = options.enforce.range;

		if (typeof range.min === 'number') {
			config.min = range.min;
		}

		if (typeof range.max === 'number') {
			config.max = range.max;
		}

		if (config.min > 0 || config.max > 0) {
			config.enabled = true;
		}

		return config;
	}
}
