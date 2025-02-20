const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // replace with your MySQL username
  password: '', // replace with your MySQL password
  database: 'appointments_db', // replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// POST endpoint to handle form submission
app.post('/submit-appointment', (req, res) => {
  const { name, email, course, car, message } = req.body;

  const query = 'INSERT INTO appointments (name, email, course, car, message) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, email, course, car, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error saving appointment');
    } else {
      res.status(200).send('Appointment submitted successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
