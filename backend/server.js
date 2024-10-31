const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const xss = require('xss-clean');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to PostgreSQL
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => {
    console.error('Failed to connect to PostgreSQL', err);
    process.exit(1);
  });

// Middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(xss());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use(limiter);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../public')));

// Handle form submission with validation and save to PostgreSQL
app.post('/submit-form',
  [
    body('name').trim().notEmpty().withMessage('Name is required.'),
    body('email').isEmail().withMessage('Invalid email address.').normalizeEmail(),
    body('location').optional().trim().escape(),
    body('message').trim().notEmpty().withMessage('Message is required.').escape(),
  ],
  async (req, res) => {
    console.log('Received form submission:', req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, location, message } = req.body;

    try {
      const query = 'INSERT INTO form_submissions (name, email, location, message, submitted_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *';
      const values = [name, email, location, message];
      const result = await pool.query(query, values);
      console.log('Form data saved to PostgreSQL:', result.rows[0]);

      // Send email notification
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'solidarity.forever@thecapitalworker.com',
        subject: 'New Signee Information',
        text: `Name: ${name}\nEmail: ${email}\nLocation: ${location}\nMessage: ${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });

      res.status(200).json({ message: 'Form submitted successfully.' });
    } catch (err) {
      console.error('Error saving form data to PostgreSQL:', err);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
);

// For any other routes, serve the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});