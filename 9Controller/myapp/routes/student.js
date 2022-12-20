const express = require('express')
const router = express.Router()
const { allStudent, deleteStudent } = require('../controllers/studentController.js')

router.get('/all', allStudent)

router.get('/delete/:id([0-9]{2})', deleteStudent)

module.exports = router;