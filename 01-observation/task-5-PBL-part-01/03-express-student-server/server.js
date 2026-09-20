

const express = require("express");
const app = express();
const PORT = 3000;

// In-memory "database" of students.
const students = [
  { id: 1, name: "Saranya", branch: "CSM", section: "B" },
  { id: 2, name: "Arjun Rao", branch: "CSE", section: "A" },
  { id: 3, name: "Priya Sharma", branch: "CSM", section: "B" },
  { id: 4, name: "Kiran Kumar", branch: "IT", section: "C" },
  { id: 5, name: "Divya Reddy", branch: "CSM", section: "A" },
];

// GET /  -> simple welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the Student Server. Try /students or /about.");
});

// GET /students -> return the full list of students as JSON
app.get("/students", (req, res) => {
  res.json(students);
});

// GET /about -> information about this application
app.get("/about", (req, res) => {
  res.json({
    appName: "Student Server",
    description:
      "A basic Express.js REST-style server built for the Full Stack Web Development PBL.",
    routes: ["/", "/students", "/about"],
    totalStudents: students.length,
  });
});

app.listen(PORT, () => {
  console.log(`Student server running at http://localhost:${PORT}`);
});
