import { inject, injectable, named } from "inversify";
import { TYPES } from "../../constants/types";
import { AcmeDeviceRepositoryInterface } from "../../domain/interfaces/AcmeDeviceRepositoryInterface";

@injectable()
export class GetDeviceHandler {
  constructor(
    @inject(TYPES.Repository)
    @named("acmeDeviceRepository")
    private acmeDeviceRepo: AcmeDeviceRepositoryInterface
  ) {}

  public async handle(device_id: any): Promise<any> {
    try {
      const device = await this.acmeDeviceRepo.getDeviceById(device_id);
      return device;
    } catch (e) {}
  }
}
