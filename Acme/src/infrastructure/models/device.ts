import mongoose from "mongoose";

export enum Status {
  CONNECTED = "CONNTECTED",
  SUSPENDED = "SUSPENDED",
  DISCONNECTED = "DISCONNECTED",
}

export const deviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    deviceType: { type: String, required: true },
    status: { type: String, required: true },
    properties: Array,
  },
  { timestamps: true }
);

export interface Device {
  name: string;
  deviceType: string;
  status: Status;
  properties: Array<any>;
}

export const DeviceModel = mongoose.model("device", deviceSchema);
