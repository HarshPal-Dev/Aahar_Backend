const Consumer = require('../models/Consumer'); // Importing the Consumer model
const bcrypt = require('bcrypt'); // Importing bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Importing jsonwebtoken for token generation

// Controller function for handling consumer login form submission
const loginConsumer = async (req, res) => {
  try {
    // Extracting data from the request body
    const { aadharNo, password } = req.body;

    // Check if a consumer with the provided Aadhar number exists
    const consumer = await Consumer.findOne({ aadharNo });
    if (!consumer) {
      return res.status(401).json({ message: 'Invalid Aadhar number or password' });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, consumer.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid Aadhar number or password' });
    }

    // If the Aadhar number and password are valid, generate a JWT token
    const token = jwt.sign({ _id: consumer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the token in the response
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in consumer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  loginConsumer
};
