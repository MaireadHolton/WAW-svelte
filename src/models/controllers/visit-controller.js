import { db } from "../db.js";

export const visitsController = {
  // method to display the visits inside a list
  index: {
    handler: async function (request, h) {
      const counties = await db.countyStore.getAllCounties();
      return h.view("Visit", {title: "Record your trip along the wild Atlantic Way", counties: counties});
    },
  },

  report: {
    handler: async function (request, h) {
      const visits = await db.visitStore.getAllVisits();
      let total = 0;
      visits.forEach((visit) => {
        total += 1;
      });
      return h.view("Report", {
        title: "Visits to Date",
        visits : visits,
        total: total,
      });
    },
  },

  // method for adding a visit 
  createVisit: {
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        const rawCounty = request.payload.county.split(",");
        const county = await db.countyStore.findByName(rawCounty[0], rawCounty[1]);
      const visit = await db.visitStore.getVisitById(request.params.visitid);
      await db.visitStore.createVisit(request.payload.location, request.payload.latitude, request.payload.longitude, request.payload.date, request.payload.details, loggedInUser._id, county._id);
      return h.redirect("/report");
    } catch (err) {
      return h.view("main", { errors: [{ message: err.message }] });
    }
  },
  },

  uploadImage: {
    // method for uploading an image inside a visit folder
    handler: async function (request, h) {
      try {
        const visit = await db.visitStore.getVisitById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          visit.img = url;
          await db.visitStore.updateVisit(visit);
        }
        return h.redirect(`/visit/${visit._id}`);
      } catch (err) {
        const visit = await db.visitStore.getVisitById(request.params.id);
        console.log(err);
        return h.redirect(`/visit/${visit._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },
};