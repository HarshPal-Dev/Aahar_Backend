const mongoose = require('mongoose');

const consumerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  aadharNo: {
    type: String,
    required: true,
    unique: true // Ensures each Aadhar number is unique
  },
  mobileNo: {
    type: String,
    required: true,
    unique: true // Ensures each mobile number is unique
  },
  rationNo: {
    type: String,
    required: true,
    unique: true // Ensures each ration number is unique
  },
  password: {
    type: String,
    required: true
  }
});

const Consumer = mongoose.model('Consumer', consumerSchema);

module.exports = Consumer;
