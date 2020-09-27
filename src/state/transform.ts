export interface KVPStateTransform<T> {
	number: {
		operation?: 'trunc' | 'ceil' | 'floor' | 'none';
	};
	string: {
		trim: 'both' | 'left' | 'right' | 'none';
	};
}