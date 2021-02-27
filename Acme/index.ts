import "reflect-metadata";
import container from "./inversify.config";
import express, { Application, Request, Response } from "express";
import { InversifyExpressServer, interfaces, TYPE } from "inversify-express-utils";

import "./src/controllers/acmedevice";
import "./src/controllers/acmedash";

// import mongoose from "mongoose";
// import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// app.use(express.urlencoded({ extended: false }));

app.use(cors());

let server = new InversifyExpressServer(container, null, { rootPath: "/api" }, app);

// Connect to MongoDB

// mongoose
//     .connect(
//         'mongodb://mongo:27017/acme',
//         { useNewUrlParser: true }
//     )
//     .then(() => console.log('MongoDB Connected : Acme Db..'))
//     .catch(err => console.log(err));

// app.get("/api", (req: Request, res: Response) => {
//   res.send("Hi again");
// });

let appConfigured = server.build();
let serve = appConfigured.listen(
  process.env.PORT || 3000,
  () => `App running on ${serve.address().port}`
);
