const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nexgen",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to the database.");
});

// Multer Setup for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Example backend (Node.js with Express)
let enrollmentCounter = 0; // Store the counter on the server

// Endpoint for user signup
app.post('/api/signup', async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Generate a new enrollment ID by incrementing the counter
  const enrollmentId = `NG251100${enrollmentCounter + 1}`;
  enrollmentCounter++; // Increment the counter after generating the ID

  // Save the user details to the database
  const sql = `INSERT INTO signup (name, email, phone, password, enrollmentId) VALUES (?, ?, ?, ?, ?)`;
  connection.query(sql, [name, email, phone, password, enrollmentId], (err) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Database error.' });
    }
    res.status(200).json({ message: 'Signup successful!', enrollmentId });
  });
});

// Login API route
app.post("/api/login", (req, res) => {
  const { enrollmentId, password } = req.body;

  if (!enrollmentId || !password) {
    return res.status(400).json({ message: "Enrollment ID and password are required" });
  }

  const sql = `SELECT * FROM signup WHERE enrollmentId = ? AND password = ?`;
  connection.query(sql, [enrollmentId, password], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json({ message: "Database error." });
    }

    if (results.length > 0) {
      res.status(200).json({ message: "Login successful", user: results[0] });
    } else {
      res.status(401).json({ message: "Invalid Enrollment ID or password" });
    }
  });
});

// Fetch all courses
app.get("/api/courses", (req, res) => {
  const sql = "SELECT * FROM courses";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to fetch courses." });
    }
    res.status(200).json(results);
  });
});

// Add a new course
app.post("/api/courses", upload.fields([{ name: "file", maxCount: 1 }, { name: "image", maxCount: 1 }]), (req, res) => {
  const { name, code } = req.body;
  const file = req.files["file"] ? `/uploads/${req.files["file"][0].filename}` : null;
  const image = req.files["image"] ? `/uploads/${req.files["image"][0].filename}` : null;

  if (!name || !code) {
    return res.status(400).json({ message: "Name and code are required." });
  }

  const sql = "INSERT INTO courses (name, code, file, image) VALUES (?, ?, ?, ?)";
  connection.query(sql, [name, code, file, image], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to add course." });
    }
    res.status(200).json({ id: results.insertId, name, code, file, image });
  });
});

// Delete a course
app.delete("/api/courses/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM courses WHERE id = ?";
  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to delete course." });
    }
    res.status(200).json({ message: "Course deleted successfully." });
  });
});

// Define the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
