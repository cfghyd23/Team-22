const express = require("express");
const controller = require('../controller/bb.controller');

const router = express.Router();

router.get('/',controller.getAllBloodBanks);
router.get('/:id',controller.getBloodBank);
router.get('/register',controller.register);
router.get('/login',controller.login);
