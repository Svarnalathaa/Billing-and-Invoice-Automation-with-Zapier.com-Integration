require('dotenv').config(); // For loading environment variables
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const User = require('./models/User'); // Import the User model

require('./config/auth'); // Passport configuration

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/saas-billing', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session setup
app.use(session({
  secret: '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',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

app.get('/api/usage', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // Fetch usage details for the authenticated user
  res.json({ usage: 'Sample usage data for ' + req.user.displayName });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
