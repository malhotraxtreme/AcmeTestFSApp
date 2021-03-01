import { inject, injectable, named } from "inversify";
import { Device } from "../../domain/entities/Device";
import { TYPES } from "../../constants/types";
import { AcmeDeviceRepositoryInterface } from "../../domain/interfaces/AcmeDeviceRepositoryInterface";
import { SocketEmitter } from "../../socketio/socket";

@injectable()
export class CreateDeviceHandler {
  constructor(
    @inject(TYPES.Repository)
    @named("acmeDeviceRepository")
    private acmeDeviceRepo: AcmeDeviceRepositoryInterface
  ) {}

  public async handle(device: Device): Promise<any> {
    try {
      const deviceCreated = await this.acmeDeviceRepo.createDevice(device);
      SocketEmitter.socket.emit("deviceUpdated", deviceCreated);
      return deviceCreated;
    } catch (e) {}
  }
}
