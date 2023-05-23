import { accountsController } from "./models/controllers/accounts-controller.js";
import { aboutController } from "./models/controllers/about-controller.js";
import { communityController } from "./models/controllers/community-controller.js";
import { visitsController } from "./models/controllers/visit-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/about", config: aboutController.index },
  { method: "GET", path: "/community", config: communityController.index },
  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } },

  { method: "GET", path: "/visit", config: visitsController.index },
  { method: "POST", path: "/visit", config: visitsController.createVisit },
  { method: "GET", path: "/report", config: visitsController.report },

];