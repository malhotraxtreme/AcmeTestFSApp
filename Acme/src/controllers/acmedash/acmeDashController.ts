import { Request, Response } from "express";
import { controller, httpGet, interfaces } from "inversify-express-utils";

@controller("/api")
export class AcmeDashController implements interfaces.Controller {
  @httpGet("/devices")
  public async fetchAll(req: Request, res: Response): Promise<void> {
    console.log("Hi");
  }
}
