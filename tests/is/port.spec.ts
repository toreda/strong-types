import {IsPort, isPortMake} from '../../src/is/port';

import {Rule} from '../../src/rule';

const EMPTY_ARRAY: string[] = [];
const PORT_MIN = 0;
const PORT_MAX = 65353;

describe('IsPort', () => {
	let rule: Rule;
	let fn: IsPort<Rule>;

	beforeAll(() => {
		rule = new Rule();
		fn = isPortMake<Rule>(rule, rule, {invert: false, target: 'value'});
		fn();
	});

	beforeEach(() => {
		rule.reset();
		fn();
	});

	describe('Usage', () => {
		it('should return true when curr a positive integer', () => {
			const intCurr = 7;
			expect(rule.nodes[0].execute(intCurr)).toBe(true);
		});

		it(`should return false when curr is a positive non-integer number in the valid port range`, () => {
			expect(rule.nodes[0].execute(10.33)).toBe(false);
		});

		it(`should return true when curr is the min port number (${PORT_MIN})`, () => {
			expect(rule.nodes[0].execute(0)).toBe(true);
		});

		it(`should return true when curr is the max port number (${PORT_MAX})`, () => {
			expect(rule.nodes[0].execute(PORT_MAX)).toBe(true);
		});

		it(`should return false when curr is a negative number`, () => {
			const intCurr = -10;
			expect(rule.nodes[0].execute(intCurr)).toBe(false);
		});

		it('should return false when curr is invalid integer', () => {
			const intCurr = 65355;

			expect(rule.nodes[0].execute(intCurr)).toBe(false);
		});

		it('should return false when curr value is a string', () => {
			const str = '111111111';
			expect(rule.nodes[0].execute(str)).toBe(false);
		});

		it('should return false when curr value is empty string', () => {
			const str = '';
			expect(rule.nodes[0].execute(str)).toBe(false);
		});

		it('should return false when curr a positive float', () => {
			const floatCurr = 1.333;

			expect(rule.nodes[0].execute(floatCurr)).toBe(false);
		});

		it('should return false when curr a negative float', () => {
			const floatCurr = -7.333;

			expect(rule.nodes[0].execute(floatCurr)).toBe(false);
		});

		it('should return false when curr a negative Integer', () => {
			const intCurr = -43;

			expect(rule.nodes[0].execute(intCurr)).toBe(false);
		});

		it('should return false when curr is a boolean', () => {
			const curr = true;

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when curr is an empty array', () => {
			expect(rule.nodes[0].execute(EMPTY_ARRAY)).toBe(false);
		});
	});
});
