import { AsyncContainerModule, interfaces } from "inversify";
import { TYPES } from "./src/constants/types";

import { GetDeviceHandler } from "./src/application/GetDevice/GetDeviceHandler";
import { CreateDeviceHandler } from "./src/application/CreateDevice/CreateDeviceHandler";
import { DeleteDeviceHandler } from "./src/application/DeleteDevice/DeleteDeviceHandler";
import { UpdateDeviceHandler } from "./src/application/UpdateDevice/UpdateDeviceHandler";
import { GetAllDevicesHandler } from "./src/application/GetAllDevices/GetAllDevicesHandler";
import { AcmeDeviceRepository } from "./src/infrastructure/acmedevice/AcmeDeviceRepository";
import { AcmeDeviceRepositoryInterface } from "./src/domain/interfaces/AcmeDeviceRepositoryInterface";

export class Registry {
  private static instance: Registry;
  private container: AsyncContainerModule | null = null;

  private async bind(): Promise<void> {
    this.container = new AsyncContainerModule(async (bind) => {
      this.bindHandlers(bind);
      await this.bindRepositories(bind);
    });
  }

  public static async getInstance(): Promise<Registry> {
    if (!Registry.instance) {
      Registry.instance = new Registry();
      await Registry.instance.bind();
    }
    return Registry.instance;
  }

  public getContainer(): AsyncContainerModule {
    if (!this.container) {
      throw new Error("Container not initialized yet!");
    }
    return this.container;
  }

  private bindHandlers(bind: interfaces.Bind): void {
    bind<GetDeviceHandler>(TYPES.Handler)
      .to(GetDeviceHandler)
      .inSingletonScope()
      .whenTargetNamed("getDevice");
    bind<CreateDeviceHandler>(TYPES.Handler)
      .to(CreateDeviceHandler)
      .inSingletonScope()
      .whenTargetNamed("createDevice");
    bind<DeleteDeviceHandler>(TYPES.Handler)
      .to(DeleteDeviceHandler)
      .inSingletonScope()
      .whenTargetNamed("deleteDevice");
    bind<UpdateDeviceHandler>(TYPES.Handler)
      .to(UpdateDeviceHandler)
      .inSingletonScope()
      .whenTargetNamed("updateDevice");
    bind<GetAllDevicesHandler>(TYPES.Handler)
      .to(GetAllDevicesHandler)
      .inSingletonScope()
      .whenTargetNamed("getAllDevices");
  }

  private async bindRepositories(bind: interfaces.Bind): Promise<void> {
    const acmeDeviceRepository = new AcmeDeviceRepository();
    bind<AcmeDeviceRepositoryInterface>(TYPES.Repository)
      .toConstantValue(acmeDeviceRepository)
      .whenTargetNamed("acmeDeviceRepository");
  }
}
