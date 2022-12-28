const express = require('express')
const app = express()
const port = process.env.PORT || '3000'
const web = require('./routes/web.js')
const { join } = require('path')

// Setup the Diretory where template files are located (Optional if files are in views folder)
app.set('views', './views')

// Setup template Engine to use
app.set('view engine', 'ejs')

// Static Files
app.use(express.static(join(process.cwd(), 'public')))

// Load Routes
app.use('/', web)
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})