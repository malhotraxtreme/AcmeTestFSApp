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
    try {
      const res = await DeviceModel.find({ _id: device_id });
      return res;
    } catch (err) {
      console.log(500, err.message);
    }
  }
  async createDevice(device: Device): Promise<any> {
    try {
      const document = await DeviceModel.create(device);
      return document;
    } catch (err) {
      console.log(500, err.message);
    }
  }
  async updateDevice(device_id: string, device: Device | any): Promise<any> {
    try {
      const updatedDevice = await DeviceModel.updateOne({ _id: device_id }, device);
      return updatedDevice;
    } catch (err) {
      console.log(500, err.message);
    }
  }
  async deleteDevice(device_id: any): Promise<any> {
    try {
      const deletedDevice = await DeviceModel.deleteOne({ _id: device_id });
      return deletedDevice;
    } catch (err) {
      console.log(500, err.message);
    }
  }
}
