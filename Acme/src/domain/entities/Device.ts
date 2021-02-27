import { Property } from "./Property";

export class Device {
  constructor(
    protected id: string,
    protected name: string,
    protected deviceType: string,
    protected status: Status,
    protected properties: Array<Property>
  ) {}
}

export enum Status {
  CONNECTED = "CONNTECTED",
  SUSPENDED = "SUSPENDED",
  DISCONNECTED = "DISCONNECTED",
}
