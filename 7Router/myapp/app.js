const express = require('express')
const app = express();
const port = process.env.PORT || '3000'

// import express from 'express'
const stu = require('./routes/student')
const tcr = require('./routes/teacher')

// new style
// import stu from './routes/student.js'
// import tch from './routes/teacher.js'

// Load Router Modules
app.use('/school', stu)
app.use('/teacher', tcr)


app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`)

})