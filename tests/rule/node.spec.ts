import {STRuleNode} from '../../src/rule/node';
import {STRuleNodeType} from '../../src/rule/node-type';

const EMPTY_ARRAY = [];
const MOCK_ID = 'AA410912CC_11';
const MOCK_VALUE_STR = 'random-sample-str';
const MOCK_FN_UNDEFINED = undefined;
const MOCK_FN_NULL = null;

describe('STRuleNode', () => {
	let instance: STRuleNode;

	beforeAll(() => {
		instance = new STRuleNode(MOCK_ID, STRuleNodeType.OP, null);
	});

	beforeEach(() => {
		instance.children.length = 0;
	});

	describe('Constructor', () => {
		it('should initialize id property using id argument', () => {
			const sampleId = '22220AAA';
			const custom = new STRuleNode(sampleId, STRuleNodeType.OP, null);
			expect(custom.id).toBe(sampleId);
		});

		it('should initialize children property to empty array', () => {
			const custom = new STRuleNode(MOCK_ID, STRuleNodeType.OP, null);
			expect(custom.children).toEqual([]);
		});

		it('should initialize fn property to null when fn argument is null', () => {
			const custom = new STRuleNode(MOCK_ID, STRuleNodeType.OP, MOCK_FN_NULL);
			expect(custom.fn).toBeNull();
		});

		it('should initialize invertResult property to false', () => {
			const custom = new STRuleNode(MOCK_ID, STRuleNodeType.OP, MOCK_FN_NULL);
			expect(custom.invertResult).toBe(false);
		});
	});

	describe('Class Methods', () => {
		describe('execute', () => {
			it('should not throw when no fn is set and node type is CMP', () => {
				expect(() => {
					const custom = new STRuleNode(MOCK_ID, STRuleNodeType.CMP, null);
					custom.execute('random_value1');
				}).not.toThrow();
			});

			it('should return false when no fn is set and node type is CMP', () => {
				const custom = new STRuleNode(MOCK_ID, STRuleNodeType.CMP, null);
				expect(custom.execute('random_value1')).toBe(false);
			});

			it('should not throw when no fn is set and node type is OP', () => {
				expect(() => {
					const custom = new STRuleNode(MOCK_ID, STRuleNodeType.OP, null);
					custom.execute(MOCK_VALUE_STR);
				}).not.toThrow();
			});

			it('should return false when no fn is set and node type is OP', () => {
				const custom = new STRuleNode(MOCK_ID, STRuleNodeType.OP, null);
				expect(custom.execute(MOCK_VALUE_STR)).toBe(false);
			});

			it("should return true when node's fn property is undefined", () => {
				const custom = new STRuleNode(MOCK_ID, STRuleNodeType.OP, MOCK_FN_UNDEFINED as any);
				expect(custom.execute(MOCK_VALUE_STR)).toBe(false);
			});

			it('should return true when node fn returns true', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return true;
				});

				const custom = new STRuleNode(MOCK_ID, STRuleNodeType.OP, fn);
				expect(custom.execute(MOCK_VALUE_STR)).toBe(true);
			});

			it("should return false when node fn returns true and the node's invert flag is active", () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return true;
				});

				const custom = new STRuleNode(MOCK_ID, STRuleNodeType.OP, fn);
				custom.invertResult = true;
				expect(custom.execute(MOCK_VALUE_STR)).toBe(false);
			});

			it('should return false when node fn returns false', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return false;
				});

				const custom = new STRuleNode(MOCK_ID, STRuleNodeType.OP, fn);
				expect(custom.execute(MOCK_VALUE_STR)).toBe(false);
			});

			it("should return true when node fn returns false and the node's invert flag is active", () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					return false;
				});

				const custom = new STRuleNode(MOCK_ID, STRuleNodeType.OP, fn);
				custom.invertResult = true;
				expect(custom.execute(MOCK_VALUE_STR)).toBe(true);
			});
		});
	});
});
