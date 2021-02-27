import { inject, injectable, named } from "inversify";
import { Device } from "../../domain/entities/Device";
import { TYPES } from "../../constants/types";
import { AcmeDeviceRepositoryInterface } from "../../domain/interfaces/AcmeDeviceRepositoryInterface";

@injectable()
export class UpdateDeviceHandler {
  constructor(
    @inject(TYPES.Repository)
    @named("acmeDeviceRepository")
    private acmeDeviceRepo: AcmeDeviceRepositoryInterface
  ) {}

  public async handle(device: Device): Promise<any> {
    try {
      const device_id = (device as any)._id;
      const deviceUpdated = await this.acmeDeviceRepo.updateDevice(device_id, device);
      return deviceUpdated;
    } catch (e) {}
  }
}
