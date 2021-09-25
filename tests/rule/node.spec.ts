import {RuleFn} from '../../src/rule/fn';
import {RuleMods} from '../../src/rule/mods';
import {RuleNode} from '../../src/rule/node';
import {RuleNodeType} from '../../src/rule/node/type';

const MOCK_ID = 'AA410912CC_11';
const MOCK_VALUE_STR = 'random-sample-str';
const MOCK_FN_UNDEFINED = undefined;
const MOCK_FN_NULL = null;

describe('RuleNode', () => {
	let instance: RuleNode<string>;
	let sampleFn: jest.MockedFunction<RuleFn<string>>;
	let mods: RuleMods;

	beforeAll(() => {
		sampleFn = jest.fn().mockImplementation((curr: string): string => {
			return curr;
		});
		mods = {
			invert: false,
			target: 'value'
		};
		instance = new RuleNode<string>(MOCK_ID, RuleNodeType.OP, sampleFn, mods);
	});

	beforeEach(() => {
		mods.invert = false;
		mods.target = 'value';

		instance.children.length = 0;
	});

	describe('Constructor', () => {
		let ctorInstance: RuleNode<string>;
		let ctorId: string;

		beforeAll(() => {
			ctorId = '22220AAA';
			ctorInstance = new RuleNode<string>(ctorId, RuleNodeType.CMP, sampleFn, mods);
		});

		it('should initialize id property using id argument', () => {
			expect(ctorInstance.id).toBe(ctorId);
		});

		it('should initialize children property to empty array', () => {
			expect(ctorInstance.children).toEqual([]);
		});

		it('should throw when fn property is null', () => {
			expect(() => {
				const custom = new RuleNode<string>(MOCK_ID, RuleNodeType.OP, null as any, mods);
			}).toThrow(`Bad rule init - fn arg is not a function.`);
		});

		it('should initialize invertResult property to false when not set', () => {
			const custom = new RuleNode<string>(MOCK_ID, RuleNodeType.OP, sampleFn, mods);
			expect(custom.invertResult).toBe(false);
		});

		it('should initialize invertResult property to false when invert arg is false', () => {
			mods.invert = false;
			const custom = new RuleNode<string>(MOCK_ID, RuleNodeType.OP, sampleFn, mods);
			expect(custom.invertResult).toBe(false);
		});

		it('should initialize invertResult property to true when invert arg is true', () => {
			mods.invert = true;
			const custom = new RuleNode<string>(MOCK_ID, RuleNodeType.OP, sampleFn, mods);
			expect(custom.invertResult).toBe(true);
		});
	});

	describe('Class Methods', () => {
		describe('execute', () => {
			it('should return true when node fn returns true', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return true;
				});

				const custom = new RuleNode<string>(MOCK_ID, RuleNodeType.OP, fn, mods);
				expect(custom.execute(MOCK_VALUE_STR)).toBe(true);
			});

			it("should return false when node fn returns true and the node's invert flag is active", () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return true;
				});

				const custom = new RuleNode<string>(MOCK_ID, RuleNodeType.OP, fn, mods);
				custom.invertResult = true;
				expect(custom.execute(MOCK_VALUE_STR)).toBe(false);
			});

			it('should return false when node fn returns false', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return false;
				});

				const custom = new RuleNode<string>(MOCK_ID, RuleNodeType.OP, fn, mods);
				expect(custom.execute(MOCK_VALUE_STR)).toBe(false);
			});

			it("should return true when node fn returns false and with invert flag 'true'", () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return false;
				});

				const custom = new RuleNode<string>(MOCK_ID, RuleNodeType.OP, fn, mods);
				custom.invertResult = true;
				expect(custom.execute(MOCK_VALUE_STR)).toBe(true);
			});
		});
	});
});
