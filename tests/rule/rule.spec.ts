import {Rule} from '../../src/rule';
import {RuleNode} from '../../src/rule/node';
import {RuleNodeType} from '../../src/rule/node/type';

const EMPTY_ARRAY: unknown[] = [];

describe('Rule', () => {
	describe('Constructor', () => {
		it('should initialize nodes to an empty array', () => {
			const rule = new Rule();
			expect(rule.nodes).toEqual(EMPTY_ARRAY);
		});
	});

	describe('Methods', () => {
		describe('add', () => {
			it('should add exactly one comparison node when called with a cmp node', () => {
				const node = new RuleNode('CMP', RuleNodeType.CMP, () => true);
				const rule = new Rule();
				expect(rule.nodes).toHaveLength(0);
				rule.add(node);
				expect(rule.nodes).toHaveLength(1);
			});

			it('should not add node when node type is OP', () => {
				const node = new RuleNode('CMP', RuleNodeType.OP, () => true);
				const rule = new Rule();
				expect(rule.nodes).toHaveLength(0);
				rule.add(node);
				expect(rule.nodes).toHaveLength(0);
			});
		});

		describe('run', () => {
			it('should return false when rule has no nodes', () => {
				const rule = new Rule();
				const value = 111;
				expect(rule.run(value)).toBe(false);
			});

			it('should return false when all nodes return false', () => {
				const node1 = new RuleNode('CMP', RuleNodeType.CMP, () => false);
				const node2 = new RuleNode('CMP', RuleNodeType.CMP, () => false);
				const node3 = new RuleNode('CMP', RuleNodeType.CMP, () => false);
				const rule = new Rule();

				rule.add(node1);
				rule.add(node2);
				rule.add(node3);
				const value = 28711;
				expect(rule.nodes).toHaveLength(3);
				expect(rule.run(value)).toBe(false);
			});

			it('should return true when at least 1 node returns true', () => {
				const node1 = new RuleNode('CMP', RuleNodeType.CMP, () => false);
				const node2 = new RuleNode('CMP', RuleNodeType.CMP, () => true);
				const node3 = new RuleNode('CMP', RuleNodeType.CMP, () => false);
				const rule = new Rule();

				rule.add(node1);
				rule.add(node2);
				rule.add(node3);
				const value = 5551;
				expect(rule.nodes).toHaveLength(3);
				expect(rule.run(value)).toBe(true);
			});

			it('should return true when all nodes return true', () => {
				const node1 = new RuleNode('CMP', RuleNodeType.CMP, () => true);
				const node2 = new RuleNode('CMP', RuleNodeType.CMP, () => true);
				const node3 = new RuleNode('CMP', RuleNodeType.CMP, () => true);
				const rule = new Rule();

				rule.add(node1);
				rule.add(node2);
				rule.add(node3);
				const value = 33321;
				expect(rule.nodes).toHaveLength(3);
				expect(rule.run(value)).toBe(true);
			});
		});
	});
});
