import { AsyncContainerModule, interfaces } from "inversify";
import { TYPES } from "./src/constants/types";

import { GetDeviceHandler } from "./src/application/GetDevice/GetDeviceHandler";
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
  }

  private async bindRepositories(bind: interfaces.Bind): Promise<void> {
    const acmeDeviceRepository = new AcmeDeviceRepository();
    bind<AcmeDeviceRepositoryInterface>(TYPES.Repository)
      .toConstantValue(acmeDeviceRepository)
      .whenTargetNamed("acmeDeviceRepository");
  }
}
