const mongoose = require('mongoose');

const rationAdminSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true // Ensures each userId is unique
  },
  password: {
    type: String,
    required: true
  }
});

const RationAdmin = mongoose.model('RationAdmin', rationAdminSchema);

module.exports = RationAdmin;
