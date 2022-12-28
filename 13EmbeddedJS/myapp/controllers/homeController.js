const homeController = (req, res) => {
    console.log("Home Controller Run Smothly")
    // res.send('Home Page is Rendered')
    // res.render('index')
    const data = {
        'name': 'Promod',
        'id': 10,
        'marks': [10, 20, 30, 40, 50, 60]
    }
    res.render('index', data)

}
module.exports = homeController