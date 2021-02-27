import { inject, injectable, named } from "inversify";
import { TYPES } from "../../constants/types";
import { AcmeDeviceRepositoryInterface } from "../../domain/interfaces/AcmeDeviceRepositoryInterface";

@injectable()
export class DeleteDeviceHandler {
  constructor(
    @inject(TYPES.Repository)
    @named("acmeDeviceRepository")
    private acmeDeviceRepo: AcmeDeviceRepositoryInterface
  ) {}

  public async handle(device_id: string): Promise<any> {
    try {
      const deviceDeleted = await this.acmeDeviceRepo.deleteDevice(device_id);
      return deviceDeleted;
    } catch (e) {}
  }
}
