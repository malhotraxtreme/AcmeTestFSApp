import { Request, Response } from "express";
import { controller, httpGet, interfaces } from "inversify-express-utils";

@controller("/v1")
export class AcmeDashController implements interfaces.Controller {
  @httpGet("/device")
  public async fetchAll(req: Request, res: Response): Promise<void> {
    console.log("Hi");
  }
}
