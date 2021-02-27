import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { Container } from "inversify";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import { HttpException } from "./src/exceptions/HttpException";
import { Registry } from "./Registry";
import "./src/controllers/acmedevice/acmeDeviceController";
import "./src/controllers/acmedash/acmeDashController";

// Connect to MongoDB

mongoose
  .connect("mongodb://mongo:27017/acme", { useNewUrlParser: true })
  .then(() => {
    makeServer();
    console.log("MongoDB Connected : Acme Db..");
  })
  .catch((err) => console.log(err));

const makeServer = async () => {
  const container = new Container();

  // load all the bindings
  await container.loadAsync((await Registry.getInstance()).getContainer());
  const port = process.env.PORT || 3000;
  const server = new InversifyExpressServer(container);

  server.setConfig((serverApp) => {
    if (process.env.ENVIRONMENT === "local") {
      serverApp.use(cors());
    }
    serverApp.use(bodyParser.json({ type: "application/json" }));
  });
  const app = server.build();

  app.all("*", () => {
    throw new HttpException(404, "Not found");
  });

  app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
  });
};
