import {StrongMap} from 'src/map';
import {StrongInt, makeInt} from 'src/types/int';

class CustomObj {
	prop1: string = 'prop_1';
	prop2: number = 999;
}

class CustomMap extends StrongMap {
	public obj1: {
		obj2: StrongInt;
	};
	public obj3: StrongInt;
	public obj4: CustomObj;
	public obj5: any[];

	constructor(options?: any) {
		super();

		this.obj1 = {
			obj2: makeInt(0, 0)
		};
		this.obj3 = makeInt(0, 0);
		this.obj4 = new CustomObj();
		this.obj5 = [1, 2, 3];

		this.parse(options);
	}
}

describe('Tests', () => {
	it('1', () => {
		const custom = new CustomMap();
		const json = custom.jsonify();
		console.log(json);
	});

	it('2', () => {
		const custom = new CustomMap({
			obj1: {obj2: 4},
			obj3: 6,
			obj4: {prop1: 'wrong', prop2: NaN},
			obj5: [3, 4, 5]
		});
		const json = custom.jsonify();
		console.log(json);
	});
});
