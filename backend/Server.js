// // Import required modules
// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2'); // Use mysql2 for promises
// const bcrypt = require('bcrypt');
// const cors = require('cors');
// const dotenv = require('dotenv');

// // Load environment variables
// dotenv.config();

// // Initialize Express app
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MySQL connection pool (using mysql2 for promises)
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// // Promisify pool.query to use async/await
// const promisePool = pool.promise();

// // Check database connection
// pool.getConnection((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err.message);
//     process.exit(1); // Exit on connection error
//   } else {
//     console.log('Connected to the database');
//   }
// });

// // Admin Login API
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Validate input
//   if (!username || !password) {
//     return res
//       .status(400)
//       .json({ message: 'Username and password are required' });
//   }

//   try {
//     // Query to find user by username
//     const query = 'SELECT * FROM admins WHERE username = ?';
//     const [results] = await promisePool.query(query, [username]);

//     if (results.length === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const user = results[0];

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Successful login
//     res.json({
//       message: 'Login successful',
//       user: { id: user.id, username: user.username },
//     });
//   } catch (err) {
//     console.error('Error during login:', err.message);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Admin Registration API
// app.post('/api/register', async (req, res) => {
//   const { username, password } = req.body;

//   // Validate input
//   if (!username || !password) {
//     return res
//       .status(400)
//       .json({ message: 'Username and password are required' });
//   }

//   try {
//     // Check if username already exists
//     const checkQuery = 'SELECT * FROM admins WHERE username = ?';
//     const [checkResults] = await promisePool.query(checkQuery, [username]);

//     if (checkResults.length > 0) {
//       return res.status(409).json({ message: 'Username already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert new admin
//     const insertQuery = 'INSERT INTO admins (username, password) VALUES (?, ?)';
//     const [insertResults] = await promisePool.query(insertQuery, [
//       username,
//       hashedPassword,
//     ]);

//     res.status(201).json({
//       message: 'Admin registered successfully',
//       user: { id: insertResults.insertId, username },
//     });
//   } catch (err) {
//     console.error('Error during registration:', err.message);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Test Route
// app.get('/', (req, res) => {
//   res.send('API is running on port ' + PORT);
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// Import required modules
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // Use mysql2 for promises
const bcrypt = require('bcrypt');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection pool (using mysql2 for promises)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Promisify pool.query to use async/await
const promisePool = pool.promise();

// Check database connection
pool.getConnection((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1); // Exit on connection error
  } else {
    console.log('Connected to the database');
  }
});

// Admin Login API
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' });
  }

  try {
    // Query to find user by username
    const query = 'SELECT * FROM admins WHERE username = ?';
    const [results] = await promisePool.query(query, [username]);

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Successful login
    res.json({
      message: 'Login successful',
      user: { id: user.id, username: user.username },
    });
  } catch (err) {
    console.error('Error during login:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Admin Registration API
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' });
  }

  try {
    // Check if username already exists
    const checkQuery = 'SELECT * FROM admins WHERE username = ?';
    const [checkResults] = await promisePool.query(checkQuery, [username]);

    if (checkResults.length > 0) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new admin
    const insertQuery = 'INSERT INTO admins (username, password) VALUES (?, ?)';
    const [insertResults] = await promisePool.query(insertQuery, [
      username,
      hashedPassword,
    ]);

    res.status(201).json({
      message: 'Admin registered successfully',
      user: { id: insertResults.insertId, username },
    });
  } catch (err) {
    console.error('Error during registration:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Test Route
app.get('/', (req, res) => {
  res.send('API is running on port ' + PORT);
});

// Create a simple HTTP server to handle CORS
const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    // Preflight request
    res.writeHead(204); // No Content
    res.end();
    return;
  }
//////////////////////////////////////////////

// Save Registration Data API
app.post('/save-registration', async (req, res) => {
  const formData = req.body;
  console.log('Received registration data:', formData);

  try {
    const query = `INSERT INTO registrations 
      (firstName, lastName, fatherName, dob, gender, contactNumber, email, address, courses, preferredTiming, reason, qualification, institution, graduationYear, experience, relevantExperience, paymentOption, paymentMethod, transactionId, declaration, student_id, password) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      formData.firstName,
      formData.lastName,
      formData.fatherName,
      formData.dob,
      formData.gender,
      formData.contactNumber,
      formData.email,
      formData.address,
      JSON.stringify(formData.courses),
      formData.preferredTiming,
      formData.reason,
      JSON.stringify(formData.qualification),
      formData.institution,
      formData.graduationYear,
      formData.experience,
      formData.relevantExperience,
      formData.paymentOption,
      formData.paymentMethod,
      formData.transactionId,
      formData.declaration ? 1 : 0,
      formData.student_id,
      formData.password,
    ];

    const [result] = await promisePool.query(query, values);

    res.status(201).json({
      message: 'Registration data saved successfully',
      registrationId: result.insertId,
    });
  } catch (err) {
    console.error('SQL Error:', err.message);
    res.status(500).json({ message: 'Database error', error: err.message });
  }
});

// Get Latest Student ID API
app.get('/get-latest-student-id', async (req, res) => {
  try {
    const query = `SELECT student_id FROM registrations ORDER BY id DESC LIMIT 1`;
    const [result] = await promisePool.query(query);

    const latestStudentId = result.length > 0 ? result[0].student_id : null;

    res.status(200).json({ latestStudentId });
  } catch (err) {
    console.error('Error fetching latest student ID:', err.message);
    res.status(500).json({ message: 'Failed to fetch latest student ID' });
  }
});

// Get all registration data API
app.get('/get-registrations', async (req, res) => {
  try {
    const query = 'SELECT * FROM registrations';
    const [registrations] = await promisePool.query(query);

    res.status(200).json({
      message: 'Registration data fetched successfully',
      registrations: registrations,
    });
  } catch (err) {
    console.error('Error fetching registration data:', err.message);
    res.status(500).json({ message: 'Failed to fetch registration data' });
  }
});

/////////////////////////////////////////////////

  // Handle other requests through Express
  app(req, res);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
