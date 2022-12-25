const homeController = (req, res) => {
    console.log("Home Controller Run Smothly")
    // res.send('Home Page is Rendered')
    // res.render('index')
    res.render('index', { 'name': 'Promod' })

}
module.exports = homeController