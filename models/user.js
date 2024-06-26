const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true
  },
  emails: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
