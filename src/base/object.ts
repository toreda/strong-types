export interface BaseObject {
	[k: string]: unknown;
	hasOwnProperty: (propName: string) => boolean;
}
