const express = require('express')
const app = express()
const port = process.env.PORT || '3000'
const stu = require('./routes/student')
// const tcr = require('./routes/teacher')
app.use('/student', stu)




app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})