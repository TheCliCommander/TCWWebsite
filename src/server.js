const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const xss = require('xss-clean');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit'); // Import rateLimit

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(xss());
app.use(helmet());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// Handle form submission with validation
app.post('/submit-form', 
  [
    body('name').trim().isLength({ min: 1 }).escape(),
    body('email').isEmail().normalizeEmail(),
    body('message').trim().isLength({ min: 1 }).escape()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;
    console.log('Form data received:', { name, email, message });
    res.send('Form submission received');
  }
);

// Handle SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});