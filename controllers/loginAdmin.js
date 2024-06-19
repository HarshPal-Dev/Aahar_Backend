const RationAdmin = require('../models/RationAdmin'); // Importing the RationAdmin model
const jwt = require('jsonwebtoken'); // Importing jsonwebtoken for token generation

// Controller function for handling admin login form submission
const loginAdmin = async (req, res) => {
  try {
    // Extracting data from the request body
    const { userId, password } = req.body;

    // Check if an admin with the provided userId exists
    const admin = await RationAdmin.findOne({ userId });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid user ID or password' });
    }
    // Compare the provided password with the password stored in the database
    if (password !== admin.password) {
      return res.status(401).json({ message: 'Invalid user ID or password' });
    }

    // If the user ID and password are valid, generate a JWT token
    const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the token in the response
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  loginAdmin
};
