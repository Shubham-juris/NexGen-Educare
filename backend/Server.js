const express = require('express')
const mysql = require('mysql2')
const app = express()
const cors = require('cors')

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
    console.error('Connection failed:', err)
    return
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
    res.status(200).json({ message: 'Signup successful!' })
  })
})

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
