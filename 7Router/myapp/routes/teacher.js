const express = require('express')
const router = express.Router()

// All Teacher Routes
router.get('/all', (req, res) => {
    res.send('All Teacher')
})
router.post('/create', (req, res) => {
    res.send('New Teacher Created')
})
router.put('/update', (req, res) => {
    res.send('Teacher Info Updated')
})
router.delete('/delete', (req, res) => {
    res.send('Selected Teacher Deleted')
})

module.exports = router