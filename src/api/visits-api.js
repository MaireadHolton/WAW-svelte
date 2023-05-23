import Boom from "@hapi/boom";
import { db } from "../models/db.js"


export const visitsApi ={
findAll: {
    auth: {
      // define jwt as the authentication strategy
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const visits = await db.visitStore.getAllVisits();
      return visits;
    },
 },

 findByCounty: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
        const visits = await db.visitStore.getVisitsByCounty(request.params.id);
        return visits;
    },
 },

    createVisit: {
        auth: {
          strategy: "jwt",
        },
        handler: async function (request, h) {
            const county = await db.countyStore.findById(request.params.id);
            if (!county) {
              return Boom.notFound("No County of this id");
            }
           const visit = await db.visitStore.createVisit(
            request.payload.location,
            request.payload.latitude,
            request.payload.longitude,
            request.payload.date,
            request.payload.details,
            county,
            request.auth.credentials,
           );
           return visit;
        }
    },

    deleteAll: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            await db.visitStore.deleteAllVisits();
            return {success: true}
        },
    },
  }