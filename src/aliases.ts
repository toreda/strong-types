export type Primitive = boolean | number | string | bigint | symbol;

export interface JSONObject {
	[key: string]: Primitive | Array<unknown> | JSONObject;
}
