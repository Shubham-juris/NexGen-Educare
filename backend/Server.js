// Import required modules
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

// Create an Express application
const app = express()

// Middleware
app.use(express.json()) // To parse JSON requests
app.use(cors()) // Allow cross-origin requests from frontend

// MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nexgen', // Your database name
})

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message)
    process.exit(1) // Exit the process if the database connection fails
  }
  console.log('Connected to the database.')
})

// Signup API route
app.post('/signup', (req, res) => {
  const { fname, lname, email, password } = req.body

  if (!fname || !lname || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' })
  }

  // SQL query to insert data into the database
  const sql = `INSERT INTO signup (fname, lname, email, password) VALUES (?, ?, ?, ?)`
  connection.query(sql, [fname, lname, email, password], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err)
      return res.status(500).json({ message: 'Database error.' })
    }
    res.status(201).json({ message: 'Signup successful!' })
  })
})

// Root route linked with the database
app.get('/', (req, res) => {
  const sql = `SELECT * FROM signup` // Fetch all rows from the signup table
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err)
      return res.status(500).json({ message: 'Database error.' })
    }
    res.status(200).json(results) // Send the fetched data as JSON
  })
})

// Define the port
const PORT = process.env.PORT || 3000

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
