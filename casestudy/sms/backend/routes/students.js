const express = require("express");
const mongoose = require("mongoose");
const Student = require("../models/Student");

const router = express.Router();

const validId = (id) => mongoose.Types.ObjectId.isValid(id);

// CREATE
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body); // awaited before responding
    console.log("[POST] created", student._id.toString());
    res.status(201).json(student);
  } catch (err) {
    console.error("[POST] error:", err.message);
    const status = err.code === 11000 ? 409 : 400;
    res.status(status).json({ error: err.message });
  }
});

// READ ALL (newest first so fresh records appear at the top)
router.get("/", async (req, res) => {
  try {
    // Stop browsers/CDNs from serving a stale (304/cached) list
    res.set("Cache-Control", "no-store");
    const students = await Student.find().sort({ updatedAt: -1 });
    console.log("[GET] returned", students.length, "records");
    res.json(students);
  } catch (err) {
    console.error("[GET] error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ error: "Invalid id" });
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return the UPDATED document, not the old one
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ error: "Student not found" });
    console.log("[PUT] updated", req.params.id);
    res.json(updated);
  } catch (err) {
    console.error("[PUT] error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ error: "Invalid id" });
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Student not found" });
    console.log("[DELETE] removed", req.params.id);
    res.json({ message: "Deleted", id: req.params.id });
  } catch (err) {
    console.error("[DELETE] error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
