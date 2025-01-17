const mysql = require('mysql2')
require('dotenv').config()

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', // Ensure this is 'localhost'
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Admin123$',
  database: process.env.DB_NAME || 'nexgen', // Replace 'test' with your database name
})

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message)
    process.exit(1) // Exit if connection fails
  }
  console.log('Connected to the MySQL database')
})

module.exports = db
