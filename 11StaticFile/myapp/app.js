const express = require('express')
const { join } = require('path')
const app = express()
const port = process.env.PORT || '3000'
const web = require('./routes/web.js')


// Static Files
// app.use(express.static(path.join(process.cwd(), 'public'))) // best way
// app.use(express.static('public'))
app.use('/static', express.static(join(process.cwd(), 'public'))) // make virtual path to avoid conflict

// app.use('/css', express.static(join(process.cwd(), 'public/css'))) // import only css or js or images
// Load Routes
app.use('/', web)


app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})