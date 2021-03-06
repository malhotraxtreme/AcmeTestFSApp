import { inject, injectable, named } from "inversify";
import { Device } from "../../domain/entities/Device";
import { TYPES } from "../../constants/types";
import { AcmeDeviceRepositoryInterface } from "../../domain/interfaces/AcmeDeviceRepositoryInterface";
import { SocketEmitter } from "../../socketio/socket";

@injectable()
export class UpdateDeviceHandler {
  constructor(
    @inject(TYPES.Repository)
    @named("acmeDeviceRepository")
    private acmeDeviceRepo: AcmeDeviceRepositoryInterface
  ) {}

  public async handle(device_id: string, device: Device): Promise<any> {
    try {
      const deviceUpdated = await this.acmeDeviceRepo.updateDevice(device_id, device);
      SocketEmitter.socket.emit("deviceUpdated", deviceUpdated);
      return deviceUpdated;
    } catch (e) {}
  }
}
