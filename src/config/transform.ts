export default interface KVPConfigTransform {
	numbers?: {
		round?: 'trunc' | 'ceil' | 'floor' | 'none';
	};
	strings?: {
		trim: 'both' | 'left' | 'right' | 'none';
	};
}
