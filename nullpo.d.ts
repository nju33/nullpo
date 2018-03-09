export type NullpoArray = any[];
export type NullpoObject = {[k: string]: string};

declare function nullpo(args: NullpoArray): NullpoArray;
declare function nullpo(args: NullpoObject): NullpoObject;

export default nullpo;
