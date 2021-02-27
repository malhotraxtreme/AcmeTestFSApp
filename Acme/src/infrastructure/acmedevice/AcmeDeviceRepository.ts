import { injectable } from "inversify";
import { AcmeDeviceRepositoryInterface } from "../../domain/interfaces/AcmeDeviceRepositoryInterface";
import { DeviceModel } from "../models/device";
import { Device } from "../../domain/entities/Device";

@injectable()
export class AcmeDeviceRepository implements AcmeDeviceRepositoryInterface {
  constructor() {}

  async getAllDevices(): Promise<any> {
    const res = await DeviceModel.find({});
    return res;
  }
  async getDeviceById(device_id: any): Promise<any> {
    const res = await DeviceModel.find({ _id: device_id });
    return res;
  }
  async createDevice(device: Device): Promise<any> {
    const newDevice = new DeviceModel(device);
    const res = await newDevice.save();
    return res;
  }
  async updateDevice(device: Device): Promise<any> {
    const newDevice = new DeviceModel(device);
    const res = await newDevice.save();
    return res;
  }
  async deleteDevice(device_id: any): Promise<any> {
    const res = await DeviceModel.deleteOne({ _id: device_id });
    return res;
  }
}
