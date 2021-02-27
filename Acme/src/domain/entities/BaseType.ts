export class BaseType {
  constructor(protected type: RangeType, protected range: Array<string>) {}
}

export interface Range {
  upperRange: string;
  lowerRange: string;
  enumRange: Array<string>;
}

export enum RangeType {
  BOOLEAN = "BOOLEAN",
  STANDARD_UNIT = "STANDARD_UNIT",
  ENUM = "ENUM",
  LOCATION = "LOCATION",
}
