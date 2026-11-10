require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/students");

const app = express();

// CORS: allow only the deployed frontend(s)
const allowed = (process.env.CLIENT_URL || "").split(",").map((s) => s.trim()).filter(Boolean);
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowed.includes(origin)) return cb(null, true);
      cb(new Error("Not allowed by CORS: " + origin));
    },
  })
);
app.use(express.json());

// Health check: shows which DB the live server is really using
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    dbState: ["disconnected", "connected", "connecting", "disconnecting"][mongoose.connection.readyState],
    dbName: mongoose.connection.name,
    collection: "students",
  });
});

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;

if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is missing. Set it in .env or Render environment.");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected to DB:", mongoose.connection.name);
    app.listen(PORT, () => console.log("Server running on port " + PORT));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
