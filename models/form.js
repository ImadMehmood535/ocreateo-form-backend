const mongoose = require("mongoose");
const { Schema } = mongoose;

const formSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    satisfactionRating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    effectiveness: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    relevance: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    quality: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    analytics: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    efficiency: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    strategy: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    service: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    specificContent: {
      type: String,
      maxlength: 255,
    },
    additionalData: {
      type: String,
      maxlength: 255,
    },
    competitors: {
      type: String,
      maxlength: 255,
    },
    support: {
      type: String,
      maxlength: 255,
    },
    message: {
      type: String,
      required: true,
      maxlength: 255,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", formSchema);
