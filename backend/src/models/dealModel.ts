import mongoose, { Schema, Document } from "mongoose";
import { IDeal } from "../types";

interface DealDocument extends IDeal, Document {}

const dealSchema = new Schema<DealDocument>({
  title: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: false },
  last_updated: { type: String, required: true },
  votes: { type: Number, required: true },
  replies: { type: Number, required: true },
});

export default mongoose.model("Deal", dealSchema);
