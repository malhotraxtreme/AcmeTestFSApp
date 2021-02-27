import { inject, injectable, named } from "inversify";
import { Device } from "../../domain/entities/Device";
import { TYPES } from "../../constants/types";
import { AcmeDeviceRepositoryInterface } from "../../domain/interfaces/AcmeDeviceRepositoryInterface";

@injectable()
export class CreateDeviceHandler {
  constructor(
    @inject(TYPES.Repository)
    @named("acmeDeviceRepository")
    private acmeDeviceRepo: AcmeDeviceRepositoryInterface
  ) {}

  public async handle(device: Device): Promise<void> {
    try {
      const deviceCreated = await this.acmeDeviceRepo.createDevice(device);
      return deviceCreated;
    } catch (e) {}
  }
}
