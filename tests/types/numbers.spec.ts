import {StrongDouble, makeDouble} from '../../src/types/double';
import {StrongInt, makeInt} from '../../src/types/int';
import {StrongUInt, makeUInt} from '../../src/types/uint';

interface TestType {
	name: string;
	instance: any;
}
const double: StrongDouble = makeDouble(0);
const int: StrongInt = makeInt(0);
const uint: StrongUInt = makeUInt(0);

const TEST_TYPES: TestType[] = [
	{name: 'double', instance: double},
	{name: 'int', instance: int},
	{name: 'uint', instance: uint}
];

describe('numberMethods', () => {
	beforeEach(() => {
		double.reset();
		int.reset();
		uint.reset();
	});

	describe('Usage', () => {
		for (const testType of TEST_TYPES) {
			describe(`Type: ${testType.name}`, () => {
				describe('increment', () => {
					it(`should`, () => {});
				});
			});
		}
	});
});
