const Enrollment = require('../models/Enrollment'); // Importing the Enrollment model

// Controller function for handling enrollment form submission
const submitEnrollmentForm = async (req, res) => {
  try {
    // Extracting data from the request body
    const { name, rationCardNo, aadharNo, familyMembers, familyDetails } = req.body;

    // Creating a new enrollment entry in the database
    await Enrollment.create({
      name,
      rationCardNo,
      aadharNo,
      familyMembers,
      familyDetails
    });

    res.status(201).json({ message: 'Enrollment form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting enrollment form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  submitEnrollmentForm
};
