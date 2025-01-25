// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
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
  password: process.env.DB_PASSWORD, // Replace with your MySQL password
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Set the maximum number of connections
  queueLimit: 0,
});

// Promisify pool.query to use async/await
const promisePool = pool.promise();

// Connect to the database
pool.getConnection((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1); // Exit on connection error
  }
  console.log('Connected to the database');
});

// Admin Login API (POST to authenticate)
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' });
  }

  // Query to find user by username
  const query = 'SELECT * FROM admins WHERE username = ?';

  try {
    const [results] = await promisePool.query(query, [username]);

    // Log the query result for debugging
    console.log('Query Results:', results);

    if (results.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    const user = results[0]; // Assuming the username is unique

    // Compare the password using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Successful login
    res.json({
      message: 'Login successful',
      user: { id: user.id, username: user.username },
    });
  } catch (err) {
    console.error('Error querying the database:', err.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Admin Registration API (POST to create an admin)
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' });
  }

  // Hash the password before saving to the database
  const hashedPassword = await bcrypt.hash(password, 10);

  // Query to check if the username already exists
  const checkQuery = 'SELECT * FROM admins WHERE username = ?';

  try {
    const [checkResults] = await promisePool.query(checkQuery, [username]);

    if (checkResults.length > 0) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Query to insert new admin
    const insertQuery = 'INSERT INTO admins (username, password) VALUES (?, ?)';

    const [insertResults] = await promisePool.query(insertQuery, [
      username,
      hashedPassword,
    ]);

    res.json({
      message: 'Admin created successfully',
      user: { id: insertResults.insertId, username },
    });
  } catch (err) {
    console.error('Error inserting into the database:', err.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Test Route
app.get('/', (req, res) => {
  res.send('API is running on port ' + PORT);
});

// Example: Fetch Data from Database
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM your_table_name';
  pool.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
