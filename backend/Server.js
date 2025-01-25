// Import required modules
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
