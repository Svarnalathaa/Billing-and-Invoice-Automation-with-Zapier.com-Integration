// usageRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Usage = require('../models/Usage');

// Get usage details for the authenticated user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const usage = await Usage.findOne({ user: req.user.id });
    if (!usage) {
      return res.status(404).json({ message: 'Usage details not found' });
    }
    res.json(usage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
