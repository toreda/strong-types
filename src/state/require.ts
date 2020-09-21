export default interface KVPStateRequire<T> {
	arrays: {
		empty: boolean;
	};
	booleans: {
		value: boolean;
	};
	numbers: {
		floats: boolean;
		negatives: boolean;
		range: {
			enabled: boolean;
			min: number;
			max: number;
		};
	};
	strings: {
		empty: boolean;
		length: {
			enabled: boolean;
			min: number;
			max: number;
		};
	};
}
