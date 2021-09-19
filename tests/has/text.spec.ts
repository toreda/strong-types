import {HasText, makeHasText} from '../../src/has/text';

import {Rule} from '../../src/rule';

describe('HasText', () => {
	let rule: Rule;
	let fn: HasText<Rule>;

	beforeAll(() => {
		rule = new Rule();
		fn = makeHasText<Rule>(rule, rule, {invert: false});
	});

	describe('Usage', () => {
		it(`should return true when target string exactly matches current text`, () => {
			fn('zebra');
			expect(rule.nodes[0].execute('zebra')).toBe(true);
		});

		it(`should return true when current string starts with target text`, () => {
			fn('zebra-ELEPHANT-TIGER');
			expect(rule.nodes[0].execute('zebra')).toBe(true);
		});

		it(`should return true when current string contains target text as part of a longer string`, () => {
			fn('ELEPHANT-zebra-TIGER');
			expect(rule.nodes[0].execute('zebra')).toBe(true);
		});

		it(`should return false when target is an empty string`, () => {
			fn('ELEPHANT-zebra-TIGER');
			expect(rule.nodes[0].execute('zebra')).toBe(true);
		});
	});
});
