import { Device } from "../entities/Device";

export interface AcmeDeviceRepositoryInterface {
  getAllDevices(): void;
  getDeviceById(device_id: any): void;
  createDevice(device: Device): void;
  updateDevice(device_id: string, device: Device): void;
  deleteDevice(device_id: any): void;
}
