// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type json = any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ANY = any;

export type Primitive = boolean | number | string | bigint | symbol;

export interface JSONObject {
	[key: string]: Primitive | Array<unknown> | JSONObject;
}
