const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
require("dotenv").config();

const Project = require("./models/Project");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.set("bufferCommands", false);

const DEFAULT_MONGO_URI = "mongodb://127.0.0.1:27017/marketingpro";

const normalizeMongoUri = (uri) => {
  if (!uri) return DEFAULT_MONGO_URI;

  const trimmed = uri.trim();

  if (/^mongodb:\/\/[^/]+\/?$/.test(trimmed)) {
    return `${trimmed.replace(/\/?$/, "")}/marketingpro`;
  }

  return trimmed;
};

const mongoUri = normalizeMongoUri(process.env.MONGO_URI);
console.log(`Using Mongo URI: ${mongoUri.replace(/\/\/.*@/, "//***@")}`);

mongoose
  .connect(mongoUri, {
    family: 4,
    serverSelectionTimeoutMS: 5000
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err.message));

app.use((req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      message: "Database is not connected. Please check MONGO_URI / MongoDB server."
    });
  }
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});


app.post("/api/projects", async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get("/api/projects/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Not found" });
    res.json(project);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});


app.put("/api/projects/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!project) return res.status(404).json({ message: "Not found" });
    res.json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


app.delete("/api/projects/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));