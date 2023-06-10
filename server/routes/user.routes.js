const express = require("express");
const controller = require('../controller/user.controller');

const router = express.Router();

router.get('/', controller.getAllusers);
router.get('/patients', controller.getAllPatients);
router.get('/donors',controller.getAllDonors);
router.post('/login',controller.login);
router.post('/register',controller.register);
router.post('/donor-request',controller.donorRequest);
router.post('/patient-request',controller.patientRequest);
router.post('/approve-donor',controller.approveDonor);
router.post('/approve-patient',controller.approvePatient);
router.post('/delete-user',controller.deleteUser);
router.post('/remove-patient',controller.removePatient);
router.post('/remove-donor',controller.removeDonor);

module.exports = router;