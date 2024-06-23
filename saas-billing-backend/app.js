// app.js
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const usageRoutes = require('./routes/usageRoutes');
const billingRoutes = require('./routes/billingRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/auth', authRoutes);
app.use('/usage', usageRoutes);
app.use('/billing', billingRoutes);
app.use('/invoice', invoiceRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/saas_billing', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.js
const passport = require('./services/googleOAuthService');

app.use(passport.initialize());
