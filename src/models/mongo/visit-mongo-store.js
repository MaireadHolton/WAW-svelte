import { Visit } from "./visit.js";

export const visitMongoStore = {
  // method for getting all visits from the database
  async getAllVisits() {
    const visits = await Visit.find().populate("visitor").populate("county").lean();
    return visits;
  },

    // method for finding visits within a list from the database
    async getVisitsByCounty(id) {
      const visits = await Visit.find({ county: id });
      return visits;
    },

   // method for adding a visit to the database
  async createVisit(location, latitude, longitude, date, details, county, visitor) {
    const newVisit = new Visit({
      location, 
      latitude,
      longitude,
      date,
      details,
      county: county._id,
      visitor: visitor._id
    });
    await newVisit.save();
    return newVisit;
  },

  // method for deleting all visits in the database
  async deleteAllVisits() {
    await Visit.deleteMany({});
  },
}