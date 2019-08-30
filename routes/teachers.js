const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Teacher = require('../models/Teacher');
const bodyParser = require('body-parser');
const methods = require('../applicationServices/registrationAppServices');

router.get('/', methods.getTeachers);

router.post('/add',methods.addTeacher);

module.exports = router;