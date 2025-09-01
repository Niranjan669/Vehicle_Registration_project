import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  name: String,
  costid: String,
  vectype: String,
  date: String,
  regno: String
});

export default mongoose.model("Vehicle", vehicleSchema);
