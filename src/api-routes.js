import { userApi } from "./api/users-api.js";
import { countiesApi } from "./api/counties-api.js";
import { visitsApi } from "./api/visits-api.js";


export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/visits", config: visitsApi.findAll },
  { method: "GET", path: "/api/counties/{id}/visits", config: visitsApi.findByCounty },
  { method: "POST", path: "/api/counties/{id}/visits", config: visitsApi.createVisit },
  { method: "DELETE", path: "/api/visits", config: visitsApi.deleteAll },

  { method: "GET", path: "/api/counties", config: countiesApi.find },
  { method: "GET", path: "/api/counties/{id}", config: countiesApi.findOne },
  { method: "POST", path: "/api/counties", config: countiesApi.create },
  { method: "DELETE", path: "/api/counties/{id}", config: countiesApi.deleteOne },
  { method: "DELETE", path: "/api/counties", config: countiesApi.deleteAll },
];
