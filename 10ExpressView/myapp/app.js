const express = require('express')
const app = express()
const port = process.env.PORT || '3000'
const web = require('./routes/web.js')
app.use('/', web)


app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})