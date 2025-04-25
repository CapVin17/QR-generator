import mongoose from "mongoose";

const qrschema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  URL: {
    type: String,
    required: true,
  },
  Image: {
    type: String, 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const schema = mongoose.models.qrcodes || mongoose.model("qrcodes", qrschema);

export default schema;
