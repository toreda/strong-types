import {CSSFont} from '../../src/css/font';
import {Defaults} from '../../src/defaults';

describe('CSSFont', () => {
	let instance: CSSFont;

	beforeAll(() => {
		instance = new CSSFont();
	});

	describe('Constructor', () => {
		let ctorInstance: CSSFont;

		beforeAll(() => {
			ctorInstance = new CSSFont();
		});

		it(`should create property 'color' with default value '#FFFFFF'`, () => {
			expect(ctorInstance).toHaveProperty('color');
			expect(ctorInstance.color()).toBe('#FFFFFF');
		});

		it(`should create property 'size' with default value '12px'`, () => {
			expect(ctorInstance).toHaveProperty('size');
			expect(ctorInstance.size()).toBe('12px');
		});

		it(`should create property 'family' with default value '12px'`, () => {
			expect(ctorInstance).toHaveProperty('family');
			expect(ctorInstance.family()).toBe('sans-serif');
		});

		it(`should create property 'weight' with default value '12px'`, () => {
			expect(ctorInstance).toHaveProperty('weight');
			expect(ctorInstance.weight()).toBe('normal');
		});

		it(`should create property 'lineHeight' with default value 'normal'`, () => {
			expect(ctorInstance).toHaveProperty('lineHeight');
			expect(ctorInstance.lineHeight()).toBe('normal');
		});

		it(`should create property 'stretch' with default value 'normal'`, () => {
			expect(ctorInstance).toHaveProperty('stretch');
			expect(ctorInstance.stretch()).toBe('normal');
		});

		it(`should create property 'variant' with default value 'normal'`, () => {
			expect(ctorInstance).toHaveProperty('variant');
			expect(ctorInstance.variant()).toBe('normal');
		});
	});

	describe('reset', () => {
		it(`should reset color property back to default value '${Defaults.CSS.Font.Color}'`, () => {
			const value = '#000111';
			instance.color(value);
			expect(instance.color()).toBe(value);
			instance.reset();
			expect(instance.color()).toBe(Defaults.CSS.Font.Color);
		});

		it(`should reset size property back to default value'`, () => {
			const value = '44px';
			instance.size(value);
			expect(instance.size()).toBe(value);
			instance.reset();
			expect(instance.size()).toBe(Defaults.CSS.Font.Size);
		});

		it(`should reset family property back to default value'`, () => {
			const value = 'Verdana';
			instance.family(value);
			expect(instance.family()).toBe(value);
			instance.reset();
			expect(instance.family()).toBe(Defaults.CSS.Font.Family);
		});

		it(`should reset weight property back to default value'`, () => {
			const value = 'bold';
			instance.weight(value);
			expect(instance.weight()).toBe(value);
			instance.reset();
			expect(instance.weight()).toBe(Defaults.CSS.Font.Weight);
		});

		it(`should reset stretch property back to default value'`, () => {
			const value = 'expanded';
			instance.stretch(value);
			expect(instance.stretch()).toBe(value);
			instance.reset();
			expect(instance.stretch()).toBe(Defaults.CSS.Font.Stretch);
		});

		it(`should reset variant property back to default value'`, () => {
			const value = 'inherit';
			instance.variant(value);
			expect(instance.variant()).toBe(value);
			instance.reset();
			expect(instance.variant()).toBe(Defaults.CSS.Font.Variant);
		});

		it(`should reset line-height property back to default value'`, () => {
			const value = '3em';
			instance.lineHeight(value);
			expect(instance.lineHeight()).toBe(value);
			instance.reset();
			expect(instance.lineHeight()).toBe(Defaults.CSS.Font.LineHeight);
		});
	});
});
