const express = require('express');
const mysql = require('mysql2'); // Use 'mysql2' for better performance

const app = express();
const PORT = 3000;

// MySQL Connection Configuration
const db = mysql.createConnection({
  host: 'localhost', // Hostname (e.g., '127.0.0.1' or 'localhost')
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'nexgen', // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    return;
  }
  console.log('Connected to the MySQL database!');
});

// Define a simple route
app.get('/', (req, res) => {
  db.query('SELECT * FROM your_table_name', (err, results) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).send('Database query failed');
    } else {
      res.json(results); // Send query results as JSON
    }
  });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
