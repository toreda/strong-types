export interface TBStateTransform<T> {
	number: {
		operation?: 'trunc' | 'ceil' | 'floor' | 'none';
	};
	string: {
		trim: 'both' | 'left' | 'right' | 'none';
	};
}
