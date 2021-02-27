import { inject, injectable, named } from "inversify";
import { TYPES } from "../../constants/types";
import { AcmeDeviceRepositoryInterface } from "../../domain/interfaces/AcmeDeviceRepositoryInterface";

@injectable()
export class GetDeviceHandler {
  constructor(
    @inject(TYPES.Repository)
    @named("AcmeDeviceRepository")
    private acmeDeviceRepo: AcmeDeviceRepositoryInterface
  ) {}

  public async handle(device_id: any): Promise<void> {
    try {
      const device = await this.acmeDeviceRepo.getDeviceById(device_id);
      return device;
    } catch (e) {
      // if (e instanceof InvalidWave || e instanceof InvalidObject) {
      //     throw new InputException(e.status, e.message);
      // } else if (e instanceof InfrastructureException) {
      //     throw new ApplicationException(e.status, e.message);
      // }
      // throw e;
    }
  }
}
