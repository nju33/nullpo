export type NullpoArray = any[];
export type NullpoObject = {[k: string]: any};

declare function nullpo(args: NullpoArray): NullpoArray;
declare function nullpo(args: NullpoObject): NullpoObject;
declare function nullpo(args: any): any;

export default nullpo;
