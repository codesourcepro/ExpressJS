const express = require('express')
const app = express();
const port = process.env.PORT || '3000'

// Create Routes
// app.get('/', (req, res) => {
//     res.send('Code Source Pro');
// })
// // all() method
// app.get('/student/all', (req, res) => {
//     res.send('All Code Source Pro Student list')
// })
// // Remaining not Defined page
// app.get('*', (req, res) => {
//     res.send('Page Not Found !!!')
// })

// One CallBack
// app.get('/cbexample1', (req, res) => {
//     res.send("One Callback Example")
// })

// More then one Callback
// app.get('/cbexample2', (req, res, next) => {
//     console.log("First Callback Example")
//     next()
// }, (req, res) => {
//     console.log("Second Callback")
//     res.send("More than One Callback")
// })

// Array of Callback
// const cb1 = (req, res, next) => {
//     console.log("First Callback")
//     next()
// }
// const cb2 = (req, res, next) => {
//     console.log("Second Callback")
//     next()
// }
// const cb3 = (req, res) => {
//     console.log("Third Callback")
//     res.send("Array of Callback")
// }
// app.get('/ebexample3', [cb1, cb2, cb3])



/*
Chained Route Callbacks
app.route(path) => It returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware. Use app.route() to avoid duplicate route names.
app.route('/student')

*/

app.route('/student')
    .all((req, res, next) => {
        console.log('First Run this for all HTTP')
        next()
    })
    .get((req, res) => {
        res.send("All Student")
    })
    .post((req, res) => {
        res.send("All New Student")
    })
    .put((req, res) => {
        res.send("All Student")
    })



app.listen(port, () => {
    console.log(`Server Lisenting at http://localhost:${port}`)
})


