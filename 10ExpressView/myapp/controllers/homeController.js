const path = require('path')
const homeController = (req, res) => {
    // res.send('Home Page')
    // res.send('<h1>Home Page</h1>')
    // res.sendFile('/home/promod/Desktop/Backend/ExpressJS/10ExpressView/myapp/views/home.html')
    res.sendFile(path.join(process.cwd(), 'views', 'home.html'))
}

module.exports = homeController;