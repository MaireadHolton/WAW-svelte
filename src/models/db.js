import { userMongoStore } from "./mongo/user-mongo-store.js";
import { countyMongoStore} from "./mongo/county-mongo-store.js";
import { visitMongoStore } from "./mongo/visit-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,
  countyStore: null,
  visitStore: null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.countyStore = countyMongoStore;
        this.visitStore = visitMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};
