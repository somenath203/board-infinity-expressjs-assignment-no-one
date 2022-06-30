const express = require('express');

const { createStudent, getAllStudents } = require('../controllers/studentController');

const router = express.Router();


// @Method --> POST
// @Route --> http://localhost:3000/student/add
// @Desc --> Creates a new student
router.post('/add', createStudent);


// @Method --> GET
// @Route --> http://localhost:3000/student/getDetails
// @Desc --> Get all the students
router.get('/getDetails', getAllStudents);



module.exports = router;

