import {StrongDouble, makeDouble} from '../../src/types/double';
import {StrongInt, makeInt} from '../../src/types/int';
import {StrongUInt, makeUInt} from '../../src/types/uint';

interface TestType {
	name: string;
	instance: any;
}
let double: StrongDouble;
let int: StrongInt;
let uint: StrongUInt;
let testTypes: TestType[];

describe('numberMethods', () => {
	double = makeDouble(0);
	int = makeInt(0);
	uint = makeUInt(0);
	testTypes = [
		{name: 'double', instance: double},
		{name: 'int', instance: int},
		{name: 'uint', instance: uint}
	];

	beforeEach(() => {
		double.reset();
		int.reset();
		uint.reset();
	});

	describe('Usage', () => {
		for (const testType of testTypes) {
			describe(`Type: ${testType.name}`, () => {
				describe('increment', () => {
					it(`should return initial value when called with no arguments`, () => {
						const result = testType.instance();
						expect(result).toBe(0);
					});

				});

				describe('decrement', () => {
					it(`should return initial value when called with no arguments`, () => {
						const result = testType.instance();
						expect(result).toBe(0);
					});
				});
			});
		}
	});
});
