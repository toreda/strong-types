export default interface ArmorKVPOptions<T> {
	enforce?: {
		length?: {
			min?: number;
			max?: number;
		};
		range?: {
			min?: number;
			max?: number;
		};
	};
	nullable?: boolean;
}
