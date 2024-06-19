const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rationCardNo: {
    type: String,
    required: true,
    unique: true // Ensures each ration card number is unique
  },
  aadharNo: {
    type: String,
    required: true,
    unique: true // Ensures each Aadhar number is unique
  },
  familyMembers: {
    type: Number,
    required: true,
    min: 1 // At least one family member required
  },
  familyDetails: [{
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now // Automatically set the current date/time when an enrollment is created
  },
  updatedAt: {
    type: Date,
    default: Date.now // Automatically update the date/time when an enrollment is modified
  }
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;
