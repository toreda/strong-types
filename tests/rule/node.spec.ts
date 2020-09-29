import {TBRuleNode} from '../../src/rule/node';
import {TBRuleNodeType} from '../../src/rule/node-type';

const EMPTY_ARRAY = [];
const MOCK_ID = 'AA410912CC_11';
const MOCK_VALUE_STR = 'random-sample-str';
const MOCK_FN_UNDEFINED = undefined;
const MOCK_FN_NULL = null;

describe('TBRuleNode', () => {
	let instance: TBRuleNode;

	beforeAll(() => {
		instance = new TBRuleNode(MOCK_ID, TBRuleNodeType.OP, null);
	});

	beforeEach(() => {
		instance.children.length = 0;
	});

	describe('Constructor', () => {
		it('should initialize id property using id argument', () => {
			const sampleId = '22220AAA';
			const custom = new TBRuleNode(sampleId, TBRuleNodeType.OP, null);
			expect(custom.id).toBe(sampleId);
		});

		it('should initialize children property to empty array', () => {
			const custom = new TBRuleNode(MOCK_ID, TBRuleNodeType.OP, null);
			expect(custom.children).toEqual([]);
		});

		it('should initialize fn property to null when fn argument is null', () => {
			const custom = new TBRuleNode(MOCK_ID, TBRuleNodeType.OP, MOCK_FN_NULL);
			expect(custom.fn).toBeNull();
		});

		it('should initialize invertResult property to false', () => {
			const custom = new TBRuleNode(MOCK_ID, TBRuleNodeType.OP, MOCK_FN_NULL);
			expect(custom.invertResult).toBe(false);
		});
	});

	describe('Class Methods', () => {
		describe('execute', () => {
			it('should not throw when no fn is set and node type is CMP', () => {
				expect(() => {
					const custom = new TBRuleNode(MOCK_ID, TBRuleNodeType.CMP, null);
					custom.execute('random_value1');
				}).not.toThrow();
			});

			it('should return false when no fn is set and node type is CMP', () => {
				const custom = new TBRuleNode(MOCK_ID, TBRuleNodeType.CMP, null);
				expect(custom.execute('random_value1')).toBe(false);
			});

			it('should not throw when no fn is set and node type is OP', () => {
				expect(() => {
					const custom = new TBRuleNode(MOCK_ID, TBRuleNodeType.OP, null);
					custom.execute(MOCK_VALUE_STR);
				}).not.toThrow();
			});

			it('should return false when no fn is set and node type is OP', () => {
				const custom = new TBRuleNode(MOCK_ID, TBRuleNodeType.OP, null);
				expect(custom.execute(MOCK_VALUE_STR)).toBe(false);
			});

			it("should return true when node's fn property is undefined", () => {
				const custom = new TBRuleNode(
					MOCK_ID,
					TBRuleNodeType.OP,
					MOCK_FN_UNDEFINED as any
				);
				expect(custom.execute(MOCK_VALUE_STR)).toBe(false);
			});

			it('should return true when node fn returns true', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return true;
				});

				const custom = new TBRuleNode(MOCK_ID, TBRuleNodeType.OP, fn);
				expect(custom.execute(MOCK_VALUE_STR)).toBe(true);
			});

			it("should return false when node fn returns true and the node's invert flag is active", () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return true;
				});

				const custom = new TBRuleNode(MOCK_ID, TBRuleNodeType.OP, fn);
				custom.invertResult = true;
				expect(custom.execute(MOCK_VALUE_STR)).toBe(false);
			});

			it('should return false when node fn returns false', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return false;
				});

				const custom = new TBRuleNode(MOCK_ID, TBRuleNodeType.OP, fn);
				expect(custom.execute(MOCK_VALUE_STR)).toBe(false);
			});

			it("should return true when node fn returns false and the node's invert flag is active", () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return false;
				});

				const custom = new TBRuleNode(MOCK_ID, TBRuleNodeType.OP, fn);
				custom.invertResult = true;
				expect(custom.execute(MOCK_VALUE_STR)).toBe(true);
			});
		});
	});
});
