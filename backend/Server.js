const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3306;

// Create a MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1); // Exit on connection error
  }
  console.log('Connected to the database');
});

// Test Route
app.get('/', (req, res) => {
  res.send('API is running on port ' + port);
});

// Example: Fetch Data from Database
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM your_table_name';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
