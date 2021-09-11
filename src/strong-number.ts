import {Strong} from './strong';

export interface StrongNumber extends Strong<number> {
	increment: () => void;
	decrement: () => void;
}
