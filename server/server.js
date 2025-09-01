import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Vehicle from "./models/Vehicle.js";
import User from "./models/User.js";

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://localhost:27017/vehicleDBS")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Vehicle CRUD
app.post("/vehicle", async (req, res) => {
  const vehicle = new Vehicle(req.body);
  await vehicle.save();
  res.status(201).json(vehicle);
});

app.get("/vehicle", async (req, res) => {
  res.json(await Vehicle.find());
});

app.get("/vehicle/:id", async (req, res) => {
  res.json(await Vehicle.findById(req.params.id));
});

app.put("/vehicle/:id", async (req, res) => {
  await Vehicle.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated successfully" });
});

app.delete("/vehicle/:id", async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

// User Register
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

// User Login (basic)
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) return res.json({ success: true, user });
  res.status(401).json({ success: false, message: "Invalid credentials" });
});

app.listen(3001, () => console.log("Server running on port 3001"));
