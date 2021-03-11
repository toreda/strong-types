import {StrongType} from './strong-type';

export interface StrongNumber extends StrongType<number> {
	increment: () => void;
	decrement: () => void;
}
