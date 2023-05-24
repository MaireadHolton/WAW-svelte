import { Visit } from "./visit.js";

export const visitMongoStore = {
  // method for getting all visits from the database
  async getAllVisits() {
    const visits = await Visit.find().populate("visitor").populate("county").lean();
    return visits;
  },

    // method for finding visits within a county from the database
    async getVisitsByCounty(id) {
      const visits = await Visit.find({ county: id });
      return visits;
    },

    // method for finding visits by ID from the database
    async getVisitById(id) {
      if (id) {
        const visit = await Visit.findOne({ _id: id }).lean();
        return visit;
      }
      return null;
    },

   // method for adding a visit to the database
  async createVisit(location, latitude, longitude, date, details, county, visitor, img) {
    const newVisit = new Visit({
      location, 
      latitude,
      longitude,
      date,
      details,
      county: county._id,
      visitor: visitor._id,
      img,
    });
    await newVisit.save();
    return newVisit;
  },

  // method for deleting all visits in the database
  async deleteAllVisits() {
    await Visit.deleteMany({});
  },

  // method for updating a visit
  async updateVisit(visit, updatedVisit) {
    visit.location = updatedVisit.location;
    visit.latitude = updatedVisit.latitude;
    visit.longitude = updatedVisit.longitude;
    visit.date = updatedVisit.date;
    visit.detail = updatedVisit.detail;
    visit.county = updatedVisit.county;
    visit.visitor = updatedVisit.visitor;
    visit.img = updatedVisit.img;
    await visit.save();
  },
};
