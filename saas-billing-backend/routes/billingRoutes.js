// billingRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Billing = require('../models/Billing');

// Get billing information for the authenticated user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const billing = await Billing.findOne({ user: req.user.id });
    if (!billing) {
      return res.status(404).json({ message: 'Billing information not found' });
    }
    res.json(billing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
