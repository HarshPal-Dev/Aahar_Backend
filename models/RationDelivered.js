const mongoose = require('mongoose');

const rationDeliveredSchema = new mongoose.Schema({
  aadharNo: {
    type: String,
    required: true,
    unique: true // Ensures each Aadhar number is unique
  },
  mobileNo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now // Automatically set the current date when ration is delivered
  }
});

const RationDelivered = mongoose.model('RationDelivered', rationDeliveredSchema);

module.exports = RationDelivered;
