const bcrypt = require('bcrypt');
const Consumer = require('../models/Consumer');

const signupConsumer = async (req, res) => {
  try {
    const { name, age, aadharNo, mobileNo, rationNo, password } = req.body;

    // Check if a consumer with the provided Aadhar number already exists
    const existingConsumer = await Consumer.findOne({ aadharNo });
    if (existingConsumer) {
      return res.status(400).json({ message: 'A consumer with this Aadhar number already exists.' });
    }

    // Check if a consumer with the provided mobile number already exists
    const existingMobileNo = await Consumer.findOne({ mobileNo });
    if (existingMobileNo) {
      return res.status(400).json({ message: 'A consumer with this mobile number already exists.' });
    }

    // Check if a consumer with the provided ration number already exists
    const existingRationNo = await Consumer.findOne({ rationNo });
    if (existingRationNo) {
      return res.status(400).json({ message: 'A consumer with this ration number already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating a new consumer in the database with the hashed password
    await Consumer.create({
      name,
      age,
      aadharNo,
      mobileNo,
      rationNo,
      password: hashedPassword // Storing the hashed password
    });

    res.status(201).json({ message: 'Consumer created successfully!' });
  } catch (error) {
    console.error('Error creating consumer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  signupConsumer
};
