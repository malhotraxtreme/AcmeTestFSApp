import { TYPES } from "./src/constants/types";

import { Container } from "inversify";
import { interfaces, TYPE } from "inversify-express-utils";

const container = new Container();

container.bind<PostRepositoryImpl>(TYPES.Respository).to(Respository).inSingletonScope();
export default container;
