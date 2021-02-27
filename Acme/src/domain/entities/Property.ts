import { BaseType } from "./BaseType";

export class Property {
  constructor(
    protected name: string,
    protected basetype: BaseType,
    protected value: string,
    protected units: string
  ) {}
}
