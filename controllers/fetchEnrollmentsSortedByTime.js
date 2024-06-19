const Enrollment = require('../models/Enrollment'); // Assuming your model is in a 'models' directory

// Controller to fetch data from Enrollment database sorted by time
const fetchEnrollmentsSortedByTime = async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: 'asc' }); // Fetch enrollments sorted by createdAt in ascending order
    res.json(enrollments);
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    res.status(500).json({ error: 'Failed to fetch enrollments' });
  }
};

module.exports = {
  fetchEnrollmentsSortedByTime
};
