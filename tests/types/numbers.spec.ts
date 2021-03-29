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
	const TEST_TYPES: TestType[] = [
		{name: 'double', instance: double},
		{name: 'int', instance: int},
		{name: 'uint', instance: uint}
	];

	beforeAll(() => {
		double = makeDouble(0);
		int = makeInt(0);
		uint = makeUInt(0);
	});

	beforeEach(() => {
		double.reset();
		int.reset();
		uint.reset();
	});

	describe('Usage', () => {
		for (const testType of TEST_TYPES) {
			describe(`Type: ${testType.name}`, () => {
				describe('increment', () => {
					it('should ', () => {});
				});
			});

			//describe(`Type: ${testType.name}`, () => {
			//describe('decrement', () => {});
			//});
		}
	});
});
