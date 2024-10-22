const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const xss = require('xss-clean');
const mongoose = require('mongoose'); // Import mongoose
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB Atlas', err);
    process.exit(1);
  });

// Middleware
app.use(helmet()); // Adds security headers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(xss()); // Sanitize user input

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use(limiter);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// Define Mongoose Schema and Model
const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const FormSubmission = mongoose.model('FormSubmission', formSchema);

app.use(express.static(path.join(__dirname, '../public')));

// Handle form submission with validation and save to MongoDB
app.post('/submit-form',
  [
    body('name').trim().notEmpty().withMessage('Name is required.'),
    body('email').isEmail().withMessage('Invalid email address.').normalizeEmail(),
    body('location').optional().trim().escape(),
    body('message').trim().notEmpty().withMessage('Message is required.').escape(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, location, message } = req.body;

    try {
      const newSubmission = new FormSubmission({ name, email, location, message });
      await newSubmission.save();
      console.log('Form data saved to MongoDB:', newSubmission);
      res.status(200).json({ message: 'Form submitted successfully.' });
    } catch (err) {
      console.error('Error saving form data to MongoDB:', err);
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