import mongoose from "mongoose";

export const Property = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    range: { type: Object, required: true },
  },
  { timestamps: true }
);
