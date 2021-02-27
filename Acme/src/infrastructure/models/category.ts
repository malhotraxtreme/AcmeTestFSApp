import mongoose from "mongoose";
import { Property } from "./property";

export const Category = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: [String], required: true },
    properties: { type: [Property], required: true },
  },
  { timestamps: true }
);
