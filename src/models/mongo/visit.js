import Mongoose, { SchemaTypes } from "mongoose";

const { Schema } = Mongoose;

const visitSchema = new Schema({
    location: String,
    latitude: {
      type: SchemaTypes.Decimal128
    },
    longitude: {
      type: SchemaTypes.Decimal128
    },
    date: String,
    details: String,
    county: {
      type: Schema.Types.ObjectId,
      ref: "County"
    },
    visitor: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    img: String,
  });

export const Visit = Mongoose.model("Visit", visitSchema);
