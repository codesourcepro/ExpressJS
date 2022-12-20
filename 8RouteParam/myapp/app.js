const express = require('express')
const app = express()
const port = process.env.PORT || '3000'

// app.get('/student/delete/:id', (req, res) => {
//     console.log(req.params)
//     res.send(`Student Deleted ${req.params.id}`)
// })

app.get('/product/:category/:id', (req, res) => {
    console.log(req.params)
    // res.send(`Product Category: ${req.params.category} and Product ID: ${req.params.id}`)
    const { category, id } = req.params
    res.send(`Product Category: ${category} and Product ID: ${id}`)
})

app.get('/product/order/:year/and/:month', (req, res) => {
    console.log(req.params)
    const { year, month } = req.params
    res.send(`Year: ${year} and Month: ${month}`)
})

app.get('/bus/:from-:to', (req, res) => {
    console.log(req.params)
    const { from, to } = req.params
    res.send(`Travelling from: ${from} to: ${to}`)
})


app.get('/location/:state.:city', (req, res) => {
    console.log(req.params)
    const { state, city } = req.params
    res.send(`State: ${state} City: ${city}`)
})


// Route with RegX
app.get('/student/delete/:id([0-9]{2})', (req, res) => {
    console.log(req.params)
    res.send(`Student Deleted ${req.params.id}`)
})

app.get('/type(post|article)/:id', (req, res) => {
    console.log(req.params)
    res.send("POST OR ARTICLE")
})


// app.param()
app.param("id", (req, res, next, id) => {
    console.log(`called Only once ID:${id}`)
    next()
})
app.get('/user/:id', (req, res) => {
    console.log("This is User ID Path")
    res.send('Response OK')
})


// Query String
app.get('/kfc', (req, res) => {
    console.log(req.query)
    const { category, id } = req.query
    res.send(`Response OK ${category} with ID: ${id}`)
    // http://localhost:3000/kfc?category=veg&id=12
})

app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})