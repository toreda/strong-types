import KVPOptions from '../src/options';
import KVPState from '../src/state';

describe('KVPState', () => {
	let instance: KVPState<string>;

	beforeAll(() => {
		instance = new KVPState<string>();
	});

	describe('Constructor', () => {});

	describe('Implementation', () => {
		describe('create', () => {
			it('should not throw when no options argument provided', () => {
				expect(() => {
					let result = instance.create();
				}).not.toThrow();
			});
		});

		describe('createLength', () => {
			it('should not throw when no options argument provided', () => {
				expect(() => {
					let result = instance.createLength();
				}).not.toThrow();
			});

			describe('default response', () => {
				it('should return default length object when options argument not provided', () => {
					const result = instance.createLength();
					expect(result.enabled).toBe(false);
					expect(result.min).toBe(0);
					expect(result.max).toBe(0);
				});

				it('should return default length object when options.enforce not defined', () => {
					const result = instance.createLength({} as any);
					expect(result.enabled).toBe(false);
					expect(result.min).toBe(0);
					expect(result.max).toBe(0);
				});

				it('should return default length object when options.enforce not defined', () => {
					const result = instance.createLength({} as any);
					expect(result.enabled).toBe(false);
					expect(result.min).toBe(0);
					expect(result.max).toBe(0);
				});

				it('should return default length object when options.enforce.length not defined', () => {
					const result = instance.createLength({enforce: {}} as any);
					expect(result.enabled).toBe(false);
					expect(result.min).toBe(0);
					expect(result.max).toBe(0);
				});

				it('should return min = 0 when length.min is not a number', () => {
					const result = instance.createLength({
						enforce: {
							length: {
								min: 'one'
							}
						}
					} as any);
					expect(result.min).toBe(0);
				});

				it('should return enabled = false when length.min is not a number', () => {
					const result = instance.createLength({
						enforce: {
							length: {
								min: 'one'
							}
						}
					} as any);
					expect(result.enabled).toBe(false);
				});

				it('should return max = 0 when length.max is not a number', () => {
					const result = instance.createLength({
						enforce: {
							length: {
								max: 'one'
							}
						}
					} as any);
					expect(result.max).toBe(0);
				});

				it('should set min to provided length.min value when length.min is a number', () => {
					const expectedValue = 199;
					const result = instance.createLength({
						enforce: {
							length: {
								min: expectedValue
							}
						}
					} as any);
					expect(result.min).toBe(expectedValue);
				});


				it('should set max to provided length.max value when length.max is a number', () => {
					const expectedValue = 289;
					const result = instance.createLength({
						enforce: {
							length: {
								max: expectedValue
							}
						}
					} as any);
					expect(result.max).toBe(expectedValue);
				});

				it('should set min and max to provided values when length.min and length.max are numbers', () => {
					const expectedMin = 1192;
					const expectedMax = 48198;
					const result = instance.createLength({
						enforce: {
							length: {
								min: expectedMin,
								max: expectedMax
							}
						}
					} as any);

					expect(result.min).toBe(expectedMin);
					expect(result.max).toBe(expectedMax);
				});

				it('should return enabled = false when length.max is not a number', () => {
					const result = instance.createLength({
						enforce: {
							length: {
								max: 'one'
							}
						}
					} as any);
					expect(result.enabled).toBe(false);
				});

				it('should return enabled = true when length.min is not a number but length.max is', () => {
					const result = instance.createLength({
						enforce: {
							length: {
								min: 'two two',
								max: 19
							}
						}
					} as any);
					expect(result.enabled).toBe(true);
				});

				it('should return enabled = true when length.max is not a number but length.min is', () => {
					const result = instance.createLength({
						enforce: {
							length: {
								min: 12,
								max: 'one'
							}
						}
					} as any);
					expect(result.enabled).toBe(true);
				});

				it('should return enabled = true when length.min and length.max are numbers', () => {
					const result = instance.createLength({
						enforce: {
							length: {
								min: 12,
								max: 19
							}
						}
					} as any);
					expect(result.enabled).toBe(true);
				});
			});
		});

		describe('creatorTransforms', () => {

		});

		describe('createRange', () => {
			it('should not throw when no options argument provided', () => {
				expect(() => {
					const result = instance.createRange();
				}).not.toThrow();
			});

			describe('default response', () => {
				it('should return default range object when options argument not provided', () => {
					const result = instance.createRange();
					expect(result.enabled).toBe(false);
					expect(result.min).toBe(0);
					expect(result.max).toBe(0);
				});

				it('should return default range object when options.enforce not defined', () => {
					const result = instance.createRange({} as any);
					expect(result.enabled).toBe(false);
					expect(result.min).toBe(0);
					expect(result.max).toBe(0);
				});

				it('should return default range object when options.enforce not defined', () => {
					const result = instance.createRange({} as any);
					expect(result.enabled).toBe(false);
					expect(result.min).toBe(0);
					expect(result.max).toBe(0);
				});

				it('should return default range object when options.enforce.range not defined', () => {
					const result = instance.createRange({enforce: {}} as any);
					expect(result.enabled).toBe(false);
					expect(result.min).toBe(0);
					expect(result.max).toBe(0);
				});

				it('should return min = 0 when length.min is not a number', () => {
					const result = instance.createRange({
						enforce: {
							range: {
								min: 'one'
							}
						}
					} as any);
					expect(result.min).toBe(0);
				});

				it('should return enabled = false when range.min is not a number', () => {
					const result = instance.createRange({
						enforce: {
							range: {
								min: 'one'
							}
						}
					} as any);
					expect(result.enabled).toBe(false);
				});

				it('should return max = 0 when range.max is not a number', () => {
					const result = instance.createRange({
						enforce: {
							range: {
								max: 'one'
							}
						}
					} as any);
					expect(result.max).toBe(0);
				});

				it('should set min to provided range.min value when range.min is a number', () => {
					const expectedValue = 199;
					const result = instance.createRange({
						enforce: {
							range: {
								min: expectedValue
							}
						}
					} as any);
					expect(result.min).toBe(expectedValue);
				});

				it('should set max to provided range.max value when range.max is a number', () => {
					const expectedValue = 289;
					const result = instance.createRange({
						enforce: {
							range: {
								max: expectedValue
							}
						}
					} as any);
					expect(result.max).toBe(expectedValue);
				});

				it('should set min and max to provided values when range.min and range.max are numbers', () => {
					const expectedMin = 1192;
					const expectedMax = 48198;
					const result = instance.createRange({
						enforce: {
							range: {
								min: expectedMin,
								max: expectedMax
							}
						}
					} as any);

					expect(result.min).toBe(expectedMin);
					expect(result.max).toBe(expectedMax);
				});

				it('should return enabled = false when range.max is not a number', () => {
					const result = instance.createRange({
						enforce: {
							range: {
								max: 'one'
							}
						}
					} as any);
					expect(result.enabled).toBe(false);
				});

				it('should return enabled = true when range.min is not a number but range.max is', () => {
					const result = instance.createRange({
						enforce: {
							range: {
								min: 'two two',
								max: 19
							}
						}
					} as any);
					expect(result.enabled).toBe(true);
				});

				it('should return enabled = true when range.max is not a number but range.min is', () => {
					const result = instance.createRange({
						enforce: {
							range: {
								min: 12,
								max: 'one'
							}
						}
					} as any);
					expect(result.enabled).toBe(true);
				});

				it('should return enabled = true when range.min and range.max are numbers', () => {
					const result = instance.createRange({
						enforce: {
							range: {
								min: 12,
								max: 19
							}
						}
					} as any);
					expect(result.enabled).toBe(true);
				});
			});
		});
	});
});
