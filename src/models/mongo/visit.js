import Mongoose, { SchemaType, SchemaTypes } from "mongoose";

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
    visitor: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    county: {
      type: Schema.Types.ObjectId,
      ref: "County"
    },
  });

export const Visit = Mongoose.model("Visit", visitSchema);
