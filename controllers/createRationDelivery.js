const RationDelivered = require('../models/RationDelivered'); // Assuming your model is in a 'models' directory

// Controller to create entry in RationDelivered database
const createRationDelivery = async (req, res) => {
  const { aadharNo, mobileNo, name } = req.body;

  try {
    // Create a new ration delivery entry using the create function
    await RationDelivered.create({
      aadharNo,
      mobileNo,
      name
    });

    res.json({ success: true, message: 'Ration delivery entry created successfully' }); //try catch block to handle potential errors during database interaction
  } catch (error) {
    console.error('Error creating ration delivery entry:', error);
    res.status(500).json({ success: false, error: 'Failed to create ration delivery entry' });
  }
};

module.exports = {
  createRationDelivery
};
