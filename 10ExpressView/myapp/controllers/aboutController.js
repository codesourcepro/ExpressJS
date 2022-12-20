const path = require('path')
const aboutController = (req, res) => {
    console.log(path.join(process.cwd(), 'views', 'about.html'))
    res.sendFile(path.join(process.cwd(), 'views', 'about.html'))
}

module.exports = aboutController;