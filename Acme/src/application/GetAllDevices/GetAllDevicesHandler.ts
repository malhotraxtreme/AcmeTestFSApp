import { inject, injectable, named } from "inversify";
import { TYPES } from "../../constants/types";
import { AcmeDeviceRepositoryInterface } from "../../domain/interfaces/AcmeDeviceRepositoryInterface";

@injectable()
export class GetAllDevicesHandler {
  constructor(
    @inject(TYPES.Repository)
    @named("acmeDeviceRepository")
    private acmeDeviceRepo: AcmeDeviceRepositoryInterface
  ) {}

  public async handle(): Promise<any> {
    try {
      const devices = await this.acmeDeviceRepo.getAllDevices();
      return devices;
    } catch (e) {}
  }
}
