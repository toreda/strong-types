export default interface KVPConfigReject {
	arrays?: {
		all?: boolean;
		empty?: boolean;
	};
	booleans?: {
		all?: boolean;
	};
	numbers?: {
		all?: boolean;
		floats?: boolean;
		negatives?: boolean;
		range?: {
			min: number;
			max: number;
		};
	};
	strings?: {
		all?: boolean;
		empty?: boolean;
	};
}
