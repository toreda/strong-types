/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2021 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {RuleNode} from '../../src/rule/node';
import {RuleNodeType} from '../../src/rule/node/type';

const EMPTY_ARRAY: unknown[] = [];

describe('Rule', () => {
	let mods: RuleMods;

	beforeAll(() => {
		mods = {
			invert: false,
			target: 'value'
		};
	});

	describe('Constructor', () => {
		it('should initialize nodes to an empty array', () => {
			const rule = new Rule();
			expect(rule.nodes).toEqual(EMPTY_ARRAY);
		});
	});

	describe('Methods', () => {
		describe('add', () => {
			it('should add exactly one comparison node when called with a cmp node', () => {
				const node = new RuleNode('CMP', RuleNodeType.CMP, () => true, mods);
				const rule = new Rule();
				expect(rule.nodes).toHaveLength(0);
				rule.add(node);
				expect(rule.nodes).toHaveLength(1);
			});

			it('should not add node when node type is OP', () => {
				const node = new RuleNode('CMP', RuleNodeType.OP, () => true, mods);
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
				const node1 = new RuleNode('CMP', RuleNodeType.CMP, () => false, mods);
				const node2 = new RuleNode('CMP', RuleNodeType.CMP, () => false, mods);
				const node3 = new RuleNode('CMP', RuleNodeType.CMP, () => false, mods);
				const rule = new Rule();

				rule.add(node1);
				rule.add(node2);
				rule.add(node3);
				const value = 28711;
				expect(rule.nodes).toHaveLength(3);
				expect(rule.run(value)).toBe(false);
			});

			it('should return true when at least 1 node returns true', () => {
				const node1 = new RuleNode('CMP', RuleNodeType.CMP, () => false, mods);
				const node2 = new RuleNode('CMP', RuleNodeType.CMP, () => true, mods);
				const node3 = new RuleNode('CMP', RuleNodeType.CMP, () => false, mods);
				const rule = new Rule();

				rule.add(node1);
				rule.add(node2);
				rule.add(node3);
				const value = 5551;
				expect(rule.nodes).toHaveLength(3);
				expect(rule.run(value)).toBe(true);
			});

			it('should return true when all nodes return true', () => {
				const node1 = new RuleNode('CMP', RuleNodeType.CMP, () => true, mods);
				const node2 = new RuleNode('CMP', RuleNodeType.CMP, () => true, mods);
				const node3 = new RuleNode('CMP', RuleNodeType.CMP, () => true, mods);
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
