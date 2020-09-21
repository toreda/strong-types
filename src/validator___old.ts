import KVPValidatorFn from './validator-fn';
import KVPValidatorNode from './validator-node';

export default class KVPValidator<T> {
	public readonly children: KVPValidator<T>[];
	public curr: KVPValidatorNode<T> | null;

	public negateNext: boolean;

	constructor() {
		this.negateNext = false;
		this.children = [];
		this.curr = null;
	}

	public add(node: KVPValidatorNode<T>) {

	}

	public run(value: T | null): boolean {
		return true;

	}
/* 	public run(value: T | null): boolean {
		let result: boolean = false;

		try {
			result = this.validator(value);
		} catch (e) {
			console.error(`KVPValidator defaulting to false. Validator callback threw: ${e.message}.`);
			result = false;
		}

		return result;
	} */
}
