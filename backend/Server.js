// Import required modules
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

// Create an Express application
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

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
    process.exit(1)
  }
  console.log('Connected to the database.')
})

// Example backend (Node.js with Express)
let enrollmentCounter = 0 // Store the counter on the server

// Endpoint for user signup
app.post('/api/signup', async (req, res) => {
  const { name, email, phone, password } = req.body

  // Generate a new enrollment ID by incrementing the counter
  const enrollmentId = `NG251100${enrollmentCounter + 1}`
  enrollmentCounter++ // Increment the counter after generating the ID

  // Save the user details to the database
  const sql = `INSERT INTO signup (name, email, phone, password, enrollmentId) VALUES (?, ?, ?, ?, ?)`
  connection.query(sql, [name, email, phone, password, enrollmentId], (err) => {
    if (err) {
      console.error('Error inserting data:', err)
      return res.status(500).json({ message: 'Database error.' })
    }
    res.status(200).json({ message: 'Signup successful!', enrollmentId })
  })
})

// Login API route
app.post('/api/login', (req, res) => {
  const { enrollmentId, password } = req.body

  if (!enrollmentId || !password) {
    return res
      .status(400)
      .json({ message: 'Enrollment ID and password are required' })
  }

  const sql = `SELECT * FROM signup WHERE enrollmentId = ? AND password = ?`
  connection.query(sql, [enrollmentId, password], (err, results) => {
    if (err) {
      console.error('Error querying database:', err)
      return res.status(500).json({ message: 'Database error.' })
    }

    if (results.length > 0) {
      res.status(200).json({ message: 'Login successful', user: results[0] })
    } else {
      res.status(401).json({ message: 'Invalid Enrollment ID or password' })
    }
  })
})

// Define the port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
