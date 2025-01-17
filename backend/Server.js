const mysql = require('mysql2');

// Create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nexgen'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Connection failed:', err);
        return;
    }
    console.log('Connected to the database.');

    // Fetch data
    const sql = `SELECT fname, lname, email, password FROM signup`;

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return;
        }

        // Process results
        if (results.length > 0) {
            results.forEach(row => {
                console.log(`fname: ${row.fname} - lname:${row.lname} - email: ${row.email} - password:${row.password}`);
            });
        } else {
            console.log('No results found.');
        }

        // Close the connection
        connection.end();
    });
});