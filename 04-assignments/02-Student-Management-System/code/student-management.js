// Select database
use("collegeDB");

// Create collection
db.createCollection("students");

// Insert students
db.students.insertMany([
    {
        rollNo: "23CM001",
        name: "Ravi Kumar",
        branch: "CSE-AIML",
        year: 3,
        marks: 85,
        email: "ravi@example.com"
    },
    {
        rollNo: "23CM002",
        name: "Priya Sharma",
        branch: "CSE-AIML",
        year: 3,
        marks: 92,
        email: "priya@example.com"
    },
    {
        rollNo: "23CM003",
        name: "Arjun Reddy",
        branch: "CSE",
        year: 2,
        marks: 68,
        email: "arjun@example.com"
    },
    {
        rollNo: "23CM004",
        name: "Sneha Rao",
        branch: "ECE",
        year: 3,
        marks: 45,
        email: "sneha@example.com"
    }
]);

// 1. Display all students
db.students.find();

// 2. Display students belonging to CSE-AIML
db.students.find({ branch: "CSE-AIML" });

// 3. Display students who scored more than 75 marks
db.students.find({ marks: { $gt: 75 } });

// 4. Search student using rollNo
db.students.find({ rollNo: "23CM001" });

// 5. Search students based on year
db.students.find({ year: 3 });

// 6. Update marks of a particular student
db.students.updateOne(
    { rollNo: "23CM001" },
    { $set: { marks: 90 } }
);

// 7. Update another field - email
db.students.updateOne(
    { rollNo: "23CM001" },
    { $set: { email: "ravi.kumar@example.com" } }
);

// 8. Display students in descending order of marks
db.students.find().sort({ marks: -1 });

// 9. Create index on rollNo
db.students.createIndex({ rollNo: 1 });

// 10. Display indexes
db.students.getIndexes();

// 11. Real-Time Query - Students scoring above 80
db.students.find({ marks: { $gt: 80 } });

// 12. Real-Time Query - Students scoring below 50
db.students.find({ marks: { $lt: 50 } });

// 13. Real-Time Query - Highest-scoring student
db.students.find().sort({ marks: -1 }).limit(1);

// 14. Real-Time Query - Students belonging to CSE
db.students.find({ branch: "CSE" });

// 15. Real-Time Query - Students sorted according to marks
db.students.find().sort({ marks: -1 });

// 16. Delete student using rollNo
db.students.deleteOne({ rollNo: "23CM004" });

// 17. Display remaining students after deletion
db.students.find();
