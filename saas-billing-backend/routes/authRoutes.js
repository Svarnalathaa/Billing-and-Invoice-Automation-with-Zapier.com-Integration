// authRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('../services/googleOAuthService');
const User = require('../models/User');

// Google OAuth2 authentication route
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Google OAuth2 callback route
router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

module.exports = router;
