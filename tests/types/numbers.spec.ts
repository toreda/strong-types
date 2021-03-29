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

describe('numberMethods', () => {
	let TEST_TYPES: TestType[];

	beforeAll(() => {
		double = makeDouble(0);
		int = makeInt(0);
		uint = makeUInt(0);
	});

	beforeEach(() => {
		double.reset();
		int.reset();
		uint.reset();
		TEST_TYPES = [
			{name: 'double', instance: double},
			{name: 'int', instance: int},
			{name: 'uint', instance: uint}
		];
	});

	describe('Usage', () => {
		for (const testType of TEST_TYPES) {
			describe(`Type: ${testType.name}`, () => {
				describe('increment', () => {
					it('should return 1 when double is incremented once', () => {
						const value = double.increment;
						expect(value).toBe(1);
					});
				});
			});

			//describe(`Type: ${testType.name}`, () => {
			//describe('decrement', () => {});
			//});
		}
	});
});
