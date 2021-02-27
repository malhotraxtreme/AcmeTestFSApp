import { Request, Response } from "express";
import {
  controller,
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
  interfaces,
} from "inversify-express-utils";

@controller("/v1")
export class AcmeDeviceController implements interfaces.Controller {
  @httpGet("/device")
  public async fetchAll(req: Request, res: Response): Promise<void> {
    console.log("Hi");
  }

  @httpGet("/device/:deviceId")
  public async fetchOne(req: Request, res: Response): Promise<void> {
    console.log("Hi" + req.params.deviceId);
  }

  @httpPost("/device")
  public async create(req: Request, res: Response): Promise<void> {
    console.log("Hi");
  }

  @httpPut("/device")
  public async put(req: Request, res: Response): Promise<void> {
    console.log("Hi");
  }

  @httpDelete("/device")
  public async delete(req: Request, res: Response): Promise<void> {
    console.log("Hi");
  }
}
