const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    rollNo: { type: String, required: true, unique: true, trim: true },
    department: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
  },
  { timestamps: true }
);

// Explicit collection name avoids "saved in a different collection" bugs.
module.exports = mongoose.model("Student", studentSchema, "students");
