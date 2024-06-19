const express = require("express");
const router = express.router();

//import controllers
const {createRationDelivery} = require("../controllers/createRationDelivery");
const {fetchConsumerByAadhar} = require("../controllers/fetchConsumerByAadhar");
const {fetchEnrollmentsSortedByTime } = require("../controllers/fetchEnrollmentsSortedByTime");
const {loginAdmin} = require("../controllers/loginAdmin");
const {loginConsumer } = require ("../controllers/loginConsumer");
const {signupConsumer} = require("../controllers/signupConsumer");
const {submitEnrollmentForm} = require("../controllers/submitEnrollmentForm");


//define api routes
router.post("/createRationDelivery",createRationDelivery);
router.get("/fetchConsumerByAadhar",fetchConsumerByAadhar);
router.get("/fetchEnrollmentsSortedByTime",fetchEnrollmentsSortedByTime);
router.get("/loginAdmin",loginAdmin);
router.get("/loginConsumer",loginConsumer);
router.post("/signupConsumer",signupConsumer);
router.post("/submitEnrollmentForm",submitEnrollmentForm);

module.exports = router;
