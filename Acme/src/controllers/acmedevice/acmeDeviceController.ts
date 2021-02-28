import { Request, Response } from "express";
import { inject, named } from "inversify";
import { controller, httpGet, httpPost, httpPatch, httpDelete, interfaces } from "inversify-express-utils";
import { TYPES } from "../../constants/types";

import { GetDeviceHandler } from "../../application/GetDevice/GetDeviceHandler";
import { CreateDeviceHandler } from "../../application/CreateDevice/CreateDeviceHandler";
import { GetAllDevicesHandler } from "../../application/GetAllDevices/GetAllDevicesHandler";
import { DeleteDeviceHandler } from "../../application/DeleteDevice/DeleteDeviceHandler";
import { UpdateDeviceHandler } from "../../application/UpdateDevice/UpdateDeviceHandler";

@controller("/api")
export class AcmeDeviceController implements interfaces.Controller {
  constructor(
    @inject(TYPES.Handler) @named("getDevice") private getDeviceHandler: GetDeviceHandler,
    @inject(TYPES.Handler) @named("createDevice") private createDeviceHandler: CreateDeviceHandler,
    @inject(TYPES.Handler) @named("getAllDevices") private getAllDevicesHandler: GetAllDevicesHandler,
    @inject(TYPES.Handler) @named("deleteDevice") private deleteDeviceHandler: DeleteDeviceHandler,
    @inject(TYPES.Handler) @named("updateDevice") private updateDeviceHandler: UpdateDeviceHandler
  ) {}

  @httpGet("/device")
  public async fetchAll(req: Request, res: Response): Promise<any> {
    const resp = await this.getAllDevicesHandler.handle();
    return res.status(200).json(resp);
  }

  @httpGet("/device/:deviceId")
  public async fetchOne(req: Request, res: Response): Promise<any> {
    const resp = await this.getDeviceHandler.handle(req.params.deviceId);
    return res.status(200).json(resp);
  }

  @httpPost("/device")
  public async create(req: Request, res: Response): Promise<any> {
    const resp = await this.createDeviceHandler.handle(req.body);
    return res.status(200).json(resp);
  }

  @httpPatch("/device/:deviceId")
  public async patch(req: Request, res: Response): Promise<any> {
    const resp = await this.updateDeviceHandler.handle(req.params.deviceId, req.body);
    return res.status(200).json(resp);
  }

  @httpDelete("/device/:deviceId")
  public async delete(req: Request, res: Response): Promise<any> {
    const resp = await this.deleteDeviceHandler.handle(req.params.deviceId);
    return res.status(200).json(resp);
  }
}
