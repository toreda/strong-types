export default interface KVPStateReject<T> {
	arrays: {
		all: boolean;
		empty: boolean;
	};
	booleans: {
		all: boolean;
	};
	numbers: {
		all: boolean;
		floats: boolean;
		negatives: boolean;
		range: {
			enabled: boolean;
			min: number;
			max: number;
		};
	};
	strings: {
		all: boolean;
		empty: boolean;
	};
}
