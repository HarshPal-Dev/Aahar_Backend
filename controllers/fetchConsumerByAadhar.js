const Consumer = require('../models/Consumer'); // Assuming your model is in a 'models' directory

// Controller to fetch consumer signup data by Aadhar number
const fetchConsumerByAadhar = async (req, res) => {
  const { aadharNo } = req.params; // Assuming Aadhar number is passed as a URL parameter

  try {
    const consumer = await Consumer.findOne({ aadharNo });
    if (!consumer) {
      return res.status(404).json({ error: 'Consumer not found' });
    }
    res.json(consumer);
  } catch (error) {
    console.error('Error fetching consumer:', error);
    res.status(500).json({ error: 'Failed to fetch consumer' });
  }
};

module.exports = {
  fetchConsumerByAadhar
};
