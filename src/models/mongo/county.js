import Mongoose from "mongoose";

const { Schema } = Mongoose;

const countySchema = new Schema({
  nameEng: String,
  nameIrish: String,
  countyTown: String,
});

export const County = Mongoose.model("County", countySchema);