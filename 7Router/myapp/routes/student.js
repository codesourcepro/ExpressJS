const express = require('express')
const router = express.Router()

// All Student Routes
router.get('/all', (req, res) => {
    res.send('All Student')
})
router.post('/create', (req, res) => {
    res.send('New Student Created')
})
router.put('/update', (req, res) => {
    res.send('Student Info Updated')
})
router.delete('/delete', (req, res) => {
    res.send('Selected Student Deleted')
})

module.exports = router
//  or export default router