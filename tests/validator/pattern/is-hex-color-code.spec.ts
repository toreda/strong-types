import {createIsHexColorCode, isHexColorCodeStr} from '../../../src/validator/pattern/is-hex-color-code';

import {STRule} from '../../../src/rule/rule';
import {STRuleModifiers} from '../../../src/rule/modifiers';

const EMPTY_STRING = '';
const EMPTY_ARRAY = [];
const EMPTY_OBJECT = {};

const TEST_INPUTS = [
	{
		value: '#FFFFFF',
		label: 'input is upper-case #FFFFFF with leading hash',
		expectedResult: true
	},
	{
		value: '#ffffff',
		label: 'input is lower-case #ffffff with leading hash',
		expectedResult: true
	},
	{
		value: 'FFFFFF',
		label: 'input is upper-case FFFFFF without leading hash',
		expectedResult: true
	},
	{
		value: 'ffffff',
		label: 'input is lower-case ffffff without leading hash',
		expectedResult: true
	},
	{
		value: '#ffffff',
		label: 'input is short-hand code #000 with leading hash',
		expectedResult: true
	},
	{value: '#f', label: 'input is short-hand code #f with leading hash', expectedResult: true},
	{value: 'f', label: 'input is short-hand code f without leading hash', expectedResult: true},
	{value: '', label: 'input is an empty string', expectedResult: false},
	{
		value: 'FF0000FFFF',
		label: 'input is a valid hex code string with extra characters appended',
		expectedResult: false
	},
	{
		value: '#0000',
		label: 'input is short-hand code #0000 with leading hash',
		expectedResult: true
	},
	{
		value: '#FFFF',
		label: 'input is short-hand code #FFFF with leading hash',
		expectedResult: true
	},
	{
		value: '0000',
		label: 'input is short-hand code 0000 without leading hash',
		expectedResult: true
	},
	{
		value: 'FFFF',
		label: 'input is short-hand code FFFF without leading hash',
		expectedResult: true
	},
	{
		value: '#000',
		label: 'input is short-hand code #000 with leading hash',
		expectedResult: true
	},
	{
		value: '000',
		label: 'input is short-hand code 000 without leading hash',
		expectedResult: true
	},
	{
		value: '#FFF',
		label: 'input is short-hand code #FFF with leading hash',
		expectedResult: true
	},
	{
		value: 'FFF',
		label: 'input is short-hand code FFF without leading hash',
		expectedResult: true
	},
	{
		value: '#00',
		label: 'input is short-hand code #00 with leading hash',
		expectedResult: true
	},
	{
		value: '00',
		label: 'input is short-hand code 00 without leading hash',
		expectedResult: true
	},
	{
		value: '#FF',
		label: 'input is short-hand code #FF with leading hash',
		expectedResult: true
	},
	{
		value: 'FF',
		label: 'input is short-hand code FF without leading hash',
		expectedResult: true
	},
	{
		value: 'F',
		label: 'input is short-hand code FF without leading hash',
		expectedResult: true
	},
	{
		value: '0',
		label: 'input is short-hand code FF without leading hash',
		expectedResult: true
	},
	{
		value: '#F',
		label: 'input is short-hand code FF with leading hash',
		expectedResult: true
	},
	{
		value: '#0',
		label: 'input is short-hand code FF with leading hash',
		expectedResult: true
	},
	{
		value: EMPTY_STRING,
		label: 'input is an empty string',
		expectedResult: false
	},
	{
		value: '#FFFFRR',
		label: 'input is a 6 digit hex code with invalid characters',
		expectedResult: false
	},
	{
		value: '#FFFRR',
		label: 'input is a 5 digit hex code with invalid characters',
		expectedResult: false
	},
	{
		value: '#FFRR',
		label: 'input is a 4 digit hex code with invalid characters',
		expectedResult: false
	},
	{
		value: '#FRR',
		label: 'input is a 3 digit hex code with invalid characters',
		expectedResult: false
	},
	{
		value: '#FR',
		label: 'input is a 2 digit hex code with invalid characters',
		expectedResult: false
	},
	{
		value: EMPTY_ARRAY as any,
		label: 'input is an empty array',
		expectedResult: false
	},
	{
		value: EMPTY_OBJECT as any,
		label: 'input is an empty object',
		expectedResult: false
	},
	{
		value: ' ',
		label: 'input is a single space',
		expectedResult: false
	},
	{
		value: '     ',
		label: 'input is a series of spaces',
		expectedResult: false
	},
	{
		value: -1000,
		label: 'input is a negative integer',
		expectedResult: false
	},
	{
		value: -100.333,
		label: 'input is a negative double',
		expectedResult: false
	},
	{
		value: 0x0,
		label: 'input is number literal 0x0',
		expectedResult: true
	},
	{
		value: '0x0',
		label: `input is string literal '0x0'`,
		expectedResult: true
	},
	{
		value: '0x00',
		label: `input is string literal '0x00'`,
		expectedResult: true
	},
	{
		value: '0x000',
		label: `input is string literal '0x000'`,
		expectedResult: true
	},
	{
		value: '0x0000',
		label: `input is string literal '0x0000'`,
		expectedResult: true
	},
	{
		value: '0x00000',
		label: `input is string literal '0x00000'`,
		expectedResult: true
	},
	{
		value: '0x000000',
		label: `input is string literal '0x000000'`,
		expectedResult: true
	},
	{
		value: '0xF',
		label: `input is string literal '0xF'`,
		expectedResult: true
	},
	{
		value: '0xFF',
		label: `input is string literal '0xFF'`,
		expectedResult: true
	},
	{
		value: '0xFFF',
		label: `input is string literal '0xFFF'`,
		expectedResult: true
	},
	{
		value: '0xFFFF',
		label: `input is string literal '0xFFFF'`,
		expectedResult: true
	},
	{
		value: '0xFFFFF',
		label: `input is string literal '0xFFFFF'`,
		expectedResult: true
	},
	{
		value: '0xFFFFFF',
		label: `input is string literal '0xFFFFFF'`,
		expectedResult: true
	},
	{
		value: '33CCPPPP',
		label: `input is string literal '33CCPPPP'`,
		expectedResult: false
	},
	{
		value: '#33CC111V',
		label: `input is string literal '#33CC111V'`,
		expectedResult: false
	},
	{
		value: '0x99999W',
		label: `input is string literal '0x99999W'`,
		expectedResult: false
	},
	{
		value: '0xW00000',
		label: `input is string literal '0xW00000'`,
		expectedResult: false
	},
	{
		value: '0x',
		label: `input is string literal '0x'`,
		expectedResult: false
	},
	{
		value: '#0x00000000000',
		label: `input is string literal '#0x00000000000'`,
		expectedResult: false
	},
	{
		value: '#ffffff#',
		label: `input is string literal '#ffffff#'`,
		expectedResult: false
	},
	{
		value: '#ffffff',
		label: `input is string literal '#ffffff'`,
		expectedResult: true
	},
	{
		value: '#ff',
		label: `input is string literal '#ff'`,
		expectedResult: true
	},
	{
		value: '0x0',
		label: `input is string literal '0x0'`,
		expectedResult: true
	},
	{
		value: '0x00',
		label: `input is string literal '0x00'`,
		expectedResult: true
	},
	{
		value: '0x000',
		label: `input is string literal '0x000'`,
		expectedResult: true
	},
	{
		value: '0x0000',
		label: `input is string literal '0x0000'`,
		expectedResult: true
	},
	{
		value: '0x00000',
		label: `input is string literal '0x00000'`,
		expectedResult: true
	},
	{
		value: '0x000000',
		label: `input is string literal '0x000000'`,
		expectedResult: true
	},
	{
		value: 'ffffff',
		label: `input is string literal 'ffffff'`,
		expectedResult: true
	},
	{
		value: 'f',
		label: `input is string literal 'f'`,
		expectedResult: true
	},
	{
		value: 'fff',
		label: `input is string literal 'fff'`,
		expectedResult: true
	},
	{
		value: 'ffff',
		label: `input is string literal 'ffff'`,
		expectedResult: true
	},
	{
		value: 'fffff',
		label: `input is string literal 'fffff'`,
		expectedResult: true
	},
	{
		value: 'ffffff',
		label: `input is string literal 'ffffff'`,
		expectedResult: true
	}
];

describe('HexColorCode', () => {
	let mods: STRuleModifiers;
	let rule: STRule;

	beforeAll(() => {
		rule = new STRule();
		mods = {
			invert: false
		};
	});

	beforeEach(() => {
		mods.invert = false;
		rule.nodes.length = 0;
	});

	describe('Usage', () => {
		for (const input of TEST_INPUTS) {
			it(`should return ${input.expectedResult} when ${input.label}`, () => {
				const fn = createIsHexColorCode(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(input.value)).toBe(input.expectedResult);
			});
		}
	});

	describe('isHexColorCodeStr', () => {
		it('should return false when value input is a number', () => {
			expect(isHexColorCodeStr(111 as any)).toBe(false);
		});

		it('should return false when input is an empty string', () => {
			expect(isHexColorCodeStr(EMPTY_STRING)).toBe(false);
		});

		it('should return false when value input is a non-hex string', () => {
			expect(isHexColorCodeStr('nachos')).toBe(false);
		});
	});
});
