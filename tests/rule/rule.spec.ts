import {STRule} from '../../src/rule/rule';
import {STRuleNode} from '../../src/rule/node';
import {STRuleNodeType} from '../../src/rule/node-type';

const EMPTY_ARRAY: unknown[] = [];

describe('STRule', () => {
	describe('Constructor', () => {
		it('should initialize nodes to an empty array', () => {
			const rule = new STRule();
			expect(rule.nodes).toEqual(EMPTY_ARRAY);
		});
	});

	describe('Methods', () => {
		describe('add', () => {
			it('should add exactly one comparison node when called with a cmp node', () => {
				const node = new STRuleNode('CMP', STRuleNodeType.CMP, () => true);
				const rule = new STRule();
				expect(rule.nodes).toHaveLength(0);
				rule.add(node);
				expect(rule.nodes).toHaveLength(1);
			});

			it('should not add node when node type is OP', () => {
				const node = new STRuleNode('CMP', STRuleNodeType.OP, () => true);
				const rule = new STRule();
				expect(rule.nodes).toHaveLength(0);
				rule.add(node);
				expect(rule.nodes).toHaveLength(0);
			});
		});

		describe('run', () => {
			it('should return false when rule has no nodes', () => {
				const rule = new STRule();
				const value = 111;
				expect(rule.run(value)).toBe(false);
			});

			it('should return false when all nodes return false', () => {
				const node1 = new STRuleNode('CMP', STRuleNodeType.CMP, () => false);
				const node2 = new STRuleNode('CMP', STRuleNodeType.CMP, () => false);
				const node3 = new STRuleNode('CMP', STRuleNodeType.CMP, () => false);
				const rule = new STRule();

				rule.add(node1);
				rule.add(node2);
				rule.add(node3);
				const value = 28711;
				expect(rule.nodes).toHaveLength(3);
				expect(rule.run(value)).toBe(false);
			});

			it('should return true when at least 1 node returns true', () => {
				const node1 = new STRuleNode('CMP', STRuleNodeType.CMP, () => false);
				const node2 = new STRuleNode('CMP', STRuleNodeType.CMP, () => true);
				const node3 = new STRuleNode('CMP', STRuleNodeType.CMP, () => false);
				const rule = new STRule();

				rule.add(node1);
				rule.add(node2);
				rule.add(node3);
				const value = 5551;
				expect(rule.nodes).toHaveLength(3);
				expect(rule.run(value)).toBe(true);
			});

			it('should return true when all nodes return true', () => {
				const node1 = new STRuleNode('CMP', STRuleNodeType.CMP, () => true);
				const node2 = new STRuleNode('CMP', STRuleNodeType.CMP, () => true);
				const node3 = new STRuleNode('CMP', STRuleNodeType.CMP, () => true);
				const rule = new STRule();

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
